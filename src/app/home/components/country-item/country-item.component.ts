import { Component, Input } from '@angular/core';
import { Country } from 'src/app/shared/interfaces/responseBody';

@Component({
  selector: 'app-country-item',
  templateUrl: './country-item.component.html',
  styleUrls: ['./country-item.component.scss']
})
export class CountryItemComponent {
  @Input() countriesList: Country | null = null;

}
