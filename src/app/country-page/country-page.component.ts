import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from './country-page.service';
import { Country } from '../shared/interfaces/responseBody';

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

  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) { }

  getCountry(pathName: string) {
    this.dataService.getCountry(pathName).subscribe((response: any) => {

      if (response[1]) {
        alert('Not found name country')
        this.router.navigate(['/home'])
      }
      else {
        this.data = response[0]
        this.comparativePercent = (((this.data?.area || 10) / this.russiaValue) * 100) + '%'
        console.log(this.russiaValue / (this.data?.area || 1))
      }

    })
  }
  ngOnInit(): void {
    this.pathName = this.route.snapshot.paramMap.get('pathName')
    if (!this.pathName) alert('Not Found pathName')
    else this.getCountry(this.pathName)
  }
}
