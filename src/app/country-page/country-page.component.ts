import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Country } from '../shared/interfaces/responseBody';
import { Store } from '@ngrx/store';
import { loadCountryPage } from '../store/country/country.actions';
import { IStore } from '../shared/interfaces/state';
import { ILocation } from '../shared/interfaces';
import { ICountryPageState } from '../shared/interfaces/state/countryPageState';
import { selectCountryLocation, selectCountryPageData, selectCountryPageState } from '../store/country/country.selectors';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss'],
})
export class CountryPageComponent {
  pathName: string | null = null;

  countryPageState$: Observable<ICountryPageState>
  countryPageData$: Observable<Country | null>
  countryLocation$: Observable<ILocation | null>

  constructor(
    private route: ActivatedRoute,
    private store: Store<IStore>,
  ) {
    this.countryPageState$ = this.store.select(selectCountryPageState);
    this.countryPageData$ = this.store.select(selectCountryPageData);
    this.countryLocation$ = this.store.select(selectCountryLocation);
  }

  ngOnInit(): void {
    this.pathName = this.route.snapshot.paramMap.get('pathName');
    if (!this.pathName) alert('Not Found pathName');
    else this.getCountry(this.pathName);
  }

  getCountry(pathName: string) {
    this.store.dispatch(loadCountryPage({ pathName }));
  }

}
