import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginForm } from './class/LoginForm';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IStore } from '../shared/interfaces/state';
import { loadGitHubUser } from '../store/auth/auth.actions';
import { ToastrService } from 'ngx-toastr';
import { ToastrHelpers } from '../shared/helpers/toast';
import { Router } from '@angular/router';
import { StorageHelpers } from '../shared/helpers/storage';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;
  loading$: Observable<boolean>;
  error$: Observable<boolean>;

  constructor(private store: Store<IStore>, private formBuilder: FormBuilder, private toastr: ToastrService, private router: Router) {
    this.authForm = this.createForm(new LoginForm());
    this.loading$ = this.store.select((state) => state.auth.githubUser.loading);
    this.error$ = this.store.select((state) => state.auth.githubUser.error);
  }

  createForm(loginForm: LoginForm): FormGroup {
    return this.formBuilder.group({
      username: [loginForm.username],
    })
  }

  onSubmit(e: any): void {
    e.preventDefault();
    if (this.authForm.value.username) this.store.dispatch(loadGitHubUser({ username: this.authForm.value.username }));
    else return ToastrHelpers.showError(this.toastr, 'You dont can send a empty field !');

    this.error$.subscribe(err => {
      if (err) return
      if (StorageHelpers.setLocalStorage('username', this.authForm.value.username).success) this.router.navigate(['/home'])
    })
  }

  ngOnInit(): void {
    this.error$.subscribe(error => {
      if (error) ToastrHelpers.showError(this.toastr, 'GitHub Account not founded!! Try again later.');
    })
  }
}
