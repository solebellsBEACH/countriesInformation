import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Country } from '../shared/interfaces/responseBody';
import { Store } from '@ngrx/store';
import { loadCountryPage } from '../store/country/country.actions';
import { IStore } from '../shared/interfaces/state';
import { ILocation } from '../shared/interfaces';
import { ICountryPageState } from '../shared/interfaces/state/countryPageState';
import { selectCountryPage } from '../store/country/country.selectors';

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

  countryPageData$: Observable<ICountryPageState>

  constructor(
    private route: ActivatedRoute,
    private store: Store<IStore>,
  ) {
    this.countryPageData$ = this.store.select(selectCountryPage);
    this.countryPageData$.subscribe(this._formatCountryData).unsubscribe();
  }

  private _formatCountryData(countryData: ICountryPageState) {
    const { country } = countryData.data
    this.imgSrc = country?.coatOfArms.png || country?.flags.png || '';
    this.data = country;
    this.imageAlt = `This image is a flag/coat of arms from ${country?.name || 'page country'}`;

    if (country?.latlng)
      this.location = {
        latitude: country.latlng[0],
        longitude: country.latlng[1],
      };
  }

  getCountry(pathName: string) {
    this.store.dispatch(loadCountryPage({ pathName }));
  }
  ngOnInit(): void {
    this.pathName = this.route.snapshot.paramMap.get('pathName');
    if (!this.pathName) alert('Not Found pathName');
    else this.getCountry(this.pathName);
  }
}
