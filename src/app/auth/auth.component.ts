import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormControl, UntypedFormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IStore } from '../shared/interfaces/state';
import { ToastrService } from 'ngx-toastr';
import { ToastrHelpers } from '../shared/helpers/toast';
import { Router } from '@angular/router';
import { StorageHelpers } from '../shared/helpers/storage';
import { navigateHelpers } from '../shared/helpers/navigate';
import { IGitHubUserState } from '../shared/interfaces/state/authState';
import { selectAuthGithubUser } from '../store/auth/auth.selectors';
import { loadGitHubUser } from '../store/auth/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authForm = new UntypedFormGroup({
    username: new UntypedFormControl("", [Validators.required, Validators.minLength(3)])
  });

  githubUserData$: Observable<IGitHubUserState>;

  // TODO: CREATE UNIT TESTS

  constructor(private store: Store<IStore>, private formBuilder: FormBuilder, private toastr: ToastrService, private router: Router) {
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

  get username() {
    const usernameControl = this.authForm.get('username');
    return usernameControl
  }

  private _showSubmitToastError(control: UntypedFormGroup, field: string) {
    const errors = control.get(field)?.errors
    if (!errors) return
    else {
      const errorKey = Object.keys(errors as ValidationErrors)[0]
      const errorMessages: { [key: string]: string } = {
        'required': 'This field is required.',
        'minlength': 'Must be at least 3 characters.',
        // Add more error messages as needed
      };
      const toastMessage: string = errorMessages[errorKey] || "Ops, try again later"
      ToastrHelpers.showError(this.toastr, toastMessage);
    }
  }

  onSubmit(e: MouseEvent): void {
    e.preventDefault();
    if (this.username?.valid) {
      this.store.dispatch(loadGitHubUser({ username: this.authForm.value.username }));
      this.githubUserData$.subscribe(data => {
        if (data.error) return
        if (StorageHelpers.setLocalStorage('username', this.authForm.value.username).success) this._navigateToHome()
      }).unsubscribe()
    }
    else this._showSubmitToastError(this.authForm, "username")
  }

}
