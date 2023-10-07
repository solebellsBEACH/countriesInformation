import { Component, OnInit } from '@angular/core';
import { DataService } from './home.service';
import { Regions } from '../shared/interfaces';
import { Country } from '../shared/interfaces/responseBody';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contriesList: Country[] = [];
  region: Regions = Regions.africa
  regionKeys = Object.values(Regions)

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getDataByRegion(this.region).subscribe((response: Country[]) => {
      this.contriesList = response.splice(0, 20);
    });
  }

}
