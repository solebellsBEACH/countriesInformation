import { Component, OnInit } from '@angular/core';
import { DataService } from './home.service';
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
  error$: Observable<any>;

  constructor(private dataService: DataService, private store: Store<AppState>) {
    this.countriesList$ = this.store.select((state) => state.countries.data.countriesList);
    this.loading$ = this.store.select((state) => state.countries.loading);
    this.error$ = this.store.select((state) => state.countries.error);
  }

  goToMyGitProfile() {
    const externalUrl = 'https://github.com/solebellsBEACH';
    window.open(externalUrl, '_blank');
  }

  // setCountriesList() {
  //   this.dataService.getDataByRegion(this.region).subscribe((response: Country[]) => {
  //     this.store.dispatch(appActions.getCountries({ countryList: response.slice(0, 20) }));
  //   });
  // }

  handleFilterButton(regionKey: string) {
    this.region = regionKey as Regions;
    // this.setCountriesList();
  }

  ngOnInit(): void {
    this.store.dispatch(loadCountries());
  }
}
