import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginForm } from './class/LoginForm';
import { Store } from '@ngrx/store';
import { IStore } from '../shared/interfaces/state';
import { loadGitHubUser } from '../store/auth/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;

  constructor(private store: Store<IStore>, private formBuilder: FormBuilder) {
    this.authForm = this.createForm(new LoginForm());
  }
  createForm(loginForm: LoginForm): FormGroup {
    return this.formBuilder.group({
      username: [loginForm.username],
    })
  }

  onSubmit(e: any): void {
    e.preventDefault();
    console.log(this.authForm.value);
  }

  ngOnInit(): void {
    this.store.dispatch(loadGitHubUser({ username: 'solebellsBEACH' }));
  }
}
