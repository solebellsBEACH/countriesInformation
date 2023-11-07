import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginForm } from './class/LoginForm';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IStore } from '../shared/interfaces/state';
import { loadGitHubUser } from '../store/auth/auth.actions';
import { ToastrService } from 'ngx-toastr';
import { ToastrHelpers } from '../shared/helpers/toast';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;
  loading$: Observable<boolean>;
  error$: Observable<boolean>;

  constructor(private store: Store<IStore>, private formBuilder: FormBuilder, private toastr: ToastrService) {
    this.authForm = this.createForm(new LoginForm());
    this.loading$ = this.store.select((state) => state.auth.githubUser.loading);
    this.error$ = this.store.select((state) => state.auth.githubUser.error);
  }

  createForm(loginForm: LoginForm): FormGroup {
    return this.formBuilder.group({
      username: [loginForm.username],
    })
  }

  showError(label: string) {
    this.toastr.error('Ocorreu um erro durante a operação.', 'Erro');
  }

  onSubmit(e: any): void {
    e.preventDefault();
    if (this.authForm.value.username) this.store.dispatch(loadGitHubUser({ username: this.authForm.value.username }));
  }

  ngOnInit(): void {
    this.error$.subscribe(error => {
      if (error) ToastrHelpers.showError(this.toastr, 'GitHub Account not founded!! Try again later.');
    })
  }
}
