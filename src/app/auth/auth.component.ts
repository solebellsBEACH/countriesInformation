import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginForm } from './class/LoginForm';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  authForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.authForm = this.createForm(new LoginForm());
  }
  createForm(loginForm: LoginForm): FormGroup {
    return this.formBuilder.group({
      username: [loginForm.username],
      password: [loginForm.password],
    })
  }

  onSubmit(e: any): void {
    e.preventDefault();
    console.log(this.authForm.value);
  }
}
