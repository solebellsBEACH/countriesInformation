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
  russiaValue = 17098242
  comparativePercent = ''
  imgSrc = ''


  loading$: Observable<boolean>;
  data$: Observable<Country | null>;
  error$: Observable<boolean>;

  constructor(private route: ActivatedRoute, private store: Store<IStore>) {
    this.loading$ = this.store.select((state) => state.country.countryPage.loading);
    this.error$ = this.store.select((state) => state.country.countryPage.error);
    this.data$ = this.store.select((state) => state.country.countryPage.data.country);

    this.data$.subscribe(country => {
      this.comparativePercent = (((country?.area || 10) / this.russiaValue) * 100) + '%'
      this.imgSrc = country?.coatOfArms.png || country?.flags.png || ''
      this.data = country
    })
  }

  getCountry(pathName: string) {
    this.store.dispatch(loadCountryPage({ pathName }));

    // this.dataService.getCountry(pathName).subscribe((res-ponse: any) => {

    //   if (response[1]) {
    //     alert('Not found name country')
    //     this.router.navigate(['/home'])
    //   }
    //   else {
    //     this.data = response[0]
    //     this.comparativePercent = (((this.data?.area || 10) / this.russiaValue) * 100) + '%'
    //     this.imgSrc = (response[0] as Country).coatOfArms.png || (response[0] as Country).flags.png
    //   }

    // })
  }
  ngOnInit(): void {

    this.pathName = this.route.snapshot.paramMap.get('pathName')
    if (!this.pathName) alert('Not Found pathName')
    else this.getCountry(this.pathName)
  }
}
