import { Component, Input } from '@angular/core';
import { Country } from 'src/app/shared/interfaces/responseBody';

@Component({
  selector: 'app-country-item',
  templateUrl: './country-item.component.html',
  styleUrls: ['./country-item.component.scss'],
})
export class CountryItemComponent {
  @Input() country: Country | null = null;
  flag = '';
  name = '';
  capital = '';
  subregion = '';
  path = '';

  ngOnChanges() {
    if (this.country) {
      const { name, flags, capital, subregion } = this.country;
      this.flag = flags.png;
      this.name = name.common;
      this.capital = capital[0] || 'Not found capital';
      this.subregion = subregion;
      this.path = '/country/' + name.common;
    }
  }
}
