import { Component, OnInit } from '@angular/core';
import { DataService } from './home.service';
import { Regions } from '../shared/interfaces';
import { Country } from '../shared/interfaces/responseBody';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countriesList: Country[] = [];
  region: Regions = Regions.africa
  regionKeys = Object.keys(Regions)

  constructor(private dataService: DataService, private router: Router) { }

  goToMyGitProfile() {
    const externalUrl = 'https://github.com/solebellsBEACH';
    window.open(externalUrl, '_blank');
  }

  setCountriesList() {
    this.dataService.getDataByRegion(this.region).subscribe((response: Country[]) => {
      this.countriesList = response.splice(0, 20);
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
