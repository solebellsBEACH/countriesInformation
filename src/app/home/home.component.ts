import { Component, OnInit } from '@angular/core';
import { Country } from '../shared/interfaces/responseBody';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Regions } from '../shared/interfaces';
import { AppState } from '../store/app.state';
import { loadCountries } from '../store/app.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  regionKeys = Object.keys(Regions);
  region: Regions = Regions.africa;

  countriesList$: Observable<Country[]>;
  loading$: Observable<boolean>;
  error$: Observable<boolean>;

  constructor(private store: Store<{ app: AppState }>) {
    this.countriesList$ = this.store.select((state) => state.app.countries.data.countriesList);
    this.loading$ = this.store.select((state) => state.app.countries.loading);
    this.error$ = this.store.select((state) => state.app.countries.error);
  }

  goToMyGitProfile() {
    const externalUrl = 'https://github.com/solebellsBEACH';
    window.open(externalUrl, '_blank');
  }

  handleFilterButton(regionKey: string) {
    this.region = regionKey as Regions;
    // this.setCountriesList();
  }

  ngOnInit(): void {
    this.store.dispatch(loadCountries());
  }
}
