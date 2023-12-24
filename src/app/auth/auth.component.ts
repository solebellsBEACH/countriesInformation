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
import { navigateHelpers } from '../shared/helpers/navigate';
import { IGitHubUserState } from '../shared/interfaces/state/authState';
import { selectAuthGithubUser } from '../store/auth/auth.selectors';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;
  githubUserData$: Observable<IGitHubUserState>;

  // TODO: CREATE ALL THE SELECTORS 

  constructor(private store: Store<IStore>, private formBuilder: FormBuilder, private toastr: ToastrService, private router: Router) {
    this.authForm = this.createForm(new LoginForm());
    this.githubUserData$ = this.store.select(selectAuthGithubUser);
  }

  ngOnInit(): void {
    if (StorageHelpers.alreadyIsLogged().success) this._navigateToHome()
    this.githubUserData$.subscribe(data => {
      if (data.error) ToastrHelpers.showError(this.toastr, 'GitHub Account not founded!! Try again later.');
    }).unsubscribe()
  }

  private _navigateToHome() {
    navigateHelpers.navigate(this.router, '/home')
  }

  createForm(loginForm: LoginForm): FormGroup {
    return this.formBuilder.group({
      username: [loginForm.username],
    })
  }

  onSubmit(e: MouseEvent): void {
    e.preventDefault();
    // TODO: CREATE VALIDATORS TO THIS FORM
    if (this.authForm.value.username) this.store.dispatch(loadGitHubUser({ username: this.authForm.value.username }));
    else return ToastrHelpers.showError(this.toastr, 'You dont can send a empty field !');

    this.githubUserData$.subscribe(data => {
      if (data.error) return
      if (StorageHelpers.setLocalStorage('username', this.authForm.value.username).success) this._navigateToHome()
    }).unsubscribe()
  }

}
