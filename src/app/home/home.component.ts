import { Component, OnInit } from '@angular/core';
import { Country } from '../shared/interfaces/responseBody';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Regions } from '../shared/interfaces';
import { IStore } from '../shared/interfaces/state';
import { loadCountriesByRegion } from '../store/app/app.actions';
import { Router } from '@angular/router';
import { StorageHelpers } from '../shared/helpers/storage';
import { ToastrHelpers } from '../shared/helpers/toast';
import { ToastrService } from 'ngx-toastr';
import { navigateHelpers } from '../shared/helpers/navigate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  region$: Observable<Regions>
  countriesList$: Observable<Country[]>;
  loading$: Observable<boolean>;
  error$: Observable<boolean>;

  githubLabel: string = 'UserNotFounded'
  showCountries = false;

  constructor(private store: Store<IStore>, private router: Router, private toastr: ToastrService) {
    // TODO: create selector for all the store below
    this.countriesList$ = this.store.select((state) => state.app.countries.data.countriesList);
    this.loading$ = this.store.select((state) => state.app.countries.loading);
    this.error$ = this.store.select((state) => state.app.countries.error);
    this.region$ = this.store.select((state) => state.app.countries.region);
  }

  goToMyGitProfile() {
    const externalUrl = 'https://github.com/solebellsBEACH';
    window.open(externalUrl, '_blank');
  }

  private _navigateToAuth() {
    navigateHelpers.navigate(this.router, '/auth')
  }

  handleLogout() {
    if (StorageHelpers.removeItemLocalStorage('username').success) this._navigateToAuth()
  }

  ngOnInit(): void {
    const isLogged = StorageHelpers.alreadyIsLogged()
    if (isLogged.success) {
      this.githubLabel = isLogged?.data || 'UserNotFounded'
      // TODO: tranform in private function 
      this.region$.subscribe(region => {
        this.store.dispatch(loadCountriesByRegion({ region }));
      }).unsubscribe();
      ToastrHelpers.showSuccess(this.toastr, `Hello ${this.githubLabel}`);
    } else {
      this._navigateToAuth()
    }
  }
}
