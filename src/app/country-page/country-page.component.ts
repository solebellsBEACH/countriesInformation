import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Country } from '../shared/interfaces/responseBody';
import { Store } from '@ngrx/store';
import { loadCountryPage } from '../store/country/country.actions';
import { IStore } from '../shared/interfaces/state';
import { ILocation } from '../shared/interfaces';
import { ICountryPageState } from '../shared/interfaces/state/countryPageState';
import { selectCountryPageData, selectCountryPageState } from '../store/country/country.selectors';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss'],
})
export class CountryPageComponent {
  pathName: string | null = null;
  data: Country | null = null;
  imgSrc = '';
  imageAlt = '';
  location?: ILocation = undefined;

  countryPageState$: Observable<ICountryPageState>
  countryPageData$: Observable<Country | null>

  constructor(
    private route: ActivatedRoute,
    private store: Store<IStore>,
  ) {
    this.countryPageState$ = this.store.select(selectCountryPageState);
    this.countryPageData$ = this.store.select(selectCountryPageData);
    this.countryPageData$.subscribe(this._formatCountryData);
  }

  ngOnInit(): void {
    this.pathName = this.route.snapshot.paramMap.get('pathName');
    if (!this.pathName) alert('Not Found pathName');
    else this.getCountry(this.pathName);
  }

  private _formatCountryData(country: Country | null) {

    this.imgSrc = country?.coatOfArms.png || country?.flags.png || '';
    this.imageAlt = `This image is a flag/coat of arms from ${country?.name.common || 'page country'}`;

    if (country?.latlng)
      this.location = {
        latitude: country.latlng[0],
        longitude: country.latlng[1],
      };
  }

  getCountry(pathName: string) {
    this.store.dispatch(loadCountryPage({ pathName }));
  }

}
