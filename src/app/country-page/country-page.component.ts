import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Country } from '../shared/interfaces/responseBody';
import { Store } from '@ngrx/store';
import { loadCountryPage } from '../store/country/country.actions';
import { IStore } from '../shared/interfaces/state';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss']
})
export class CountryPageComponent {
  pathName: string | null = null
  data: Country | null = null
  imgSrc = ''
  imageAlt = ''


  loading$: Observable<boolean>;
  data$: Observable<Country | null>;
  error$: Observable<boolean>;

  constructor(private route: ActivatedRoute, private store: Store<IStore>) {
    this.loading$ = this.store.select((state) => state.country.countryPage.loading);
    this.error$ = this.store.select((state) => state.country.countryPage.error);
    this.data$ = this.store.select((state) => state.country.countryPage.data.country);

    this.data$.subscribe(country => {
      this.imgSrc = country?.coatOfArms.png || country?.flags.png || ''
      this.data = country
      this.imageAlt = `This image is a flag/coat of arms from ${country?.name || 'page country'}`
    })
  }

  getCountry(pathName: string) {
    this.store.dispatch(loadCountryPage({ pathName }));
  }
  ngOnInit(): void {

    this.pathName = this.route.snapshot.paramMap.get('pathName')
    if (!this.pathName) alert('Not Found pathName')
    else this.getCountry(this.pathName)
  }
}
