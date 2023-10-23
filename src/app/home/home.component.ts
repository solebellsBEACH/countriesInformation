import { Component, OnInit } from '@angular/core';
import { DataService } from './home.service';
import { Regions } from '../shared/interfaces';
import { Country } from '../shared/interfaces/responseBody';
import { Store, createSelector } from '@ngrx/store';
import * as appActions from '../store/app.actions';
import { appSelect, selectCountries } from '../store/app.select';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sel = this.store.select(selectCountries).subscribe((countries) => {
    this.countriesList = countries
  });
  countriesList: Country[] = []
  region: Regions = Regions.africa
  regionKeys = Object.keys(Regions)


  constructor(private dataService: DataService, private store: Store) { }

  goToMyGitProfile() {
    const externalUrl = 'https://github.com/solebellsBEACH';
    window.open(externalUrl, '_blank');
  }

  setCountriesList() {
    this.dataService.getDataByRegion(this.region).subscribe((response: Country[]) => {
      this.store.dispatch(appActions.getCountries({ countries: response.splice(0, 20) }));
    });
  }

  handleFilterButton(regionKey: string) {
    this.region = regionKey as Regions
    this.setCountriesList()
  }

  ngOnInit(): void {
    this.setCountriesList()
  }

}
