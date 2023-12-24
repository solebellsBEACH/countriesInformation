import { Component, OnInit } from '@angular/core';
import { Country } from '../shared/interfaces/responseBody';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IStore } from '../shared/interfaces/state';
import { loadCountriesByRegion } from '../store/app/app.actions';
import { Router } from '@angular/router';
import { StorageHelpers } from '../shared/helpers/storage';
import { ToastrHelpers } from '../shared/helpers/toast';
import { ToastrService } from 'ngx-toastr';
import { navigateHelpers } from '../shared/helpers/navigate';
import { ICountriesState } from '../shared/interfaces/state/appState';
import { selectAppCountriesList, selectAppCountryData } from '../store/app/app.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  countriesList$: Observable<Country[]>;
  countriesData$: Observable<ICountriesState>

  githubLabel: string = 'UserNotFounded'
  showCountries = false;

  constructor(private store: Store<IStore>, private router: Router, private toastr: ToastrService) {
    this.countriesList$ = this.store.select(selectAppCountriesList);
    this.countriesData$ = this.store.select(selectAppCountryData);
  }

  ngOnInit(): void {
    const isLogged = StorageHelpers.alreadyIsLogged()
    if (isLogged.success) {
      this.githubLabel = isLogged?.data || 'UserNotFounded'
      this._getCountriesByRegion()
      ToastrHelpers.showSuccess(this.toastr, `Hello ${this.githubLabel}`);
    } else this._navigateToAuth()
  }

  private _getCountriesByRegion() {
    this.countriesData$.subscribe(data => {
      this.store.dispatch(loadCountriesByRegion({ region: data.region }));
    }).unsubscribe();
  }

  private _navigateToAuth() {
    navigateHelpers.navigate(this.router, '/auth')
  }

  goToMyGitProfile() {
    const externalUrl = 'https://github.com/solebellsBEACH';
    window.open(externalUrl, '_blank');
  }

  handleLogout() {
    if (StorageHelpers.removeItemLocalStorage('username').success) this._navigateToAuth()
  }

}
