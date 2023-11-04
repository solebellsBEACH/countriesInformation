import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Regions } from 'src/app/shared/interfaces';
import { IStore } from 'src/app/shared/interfaces/state';
import { loadCountriesByRegion } from 'src/app/store/app/app.actions';


@Component({
  selector: 'app-form-content',
  templateUrl: './form-content.component.html',
  styleUrls: ['./form-content.component.scss']
})
export class FormContentComponent implements OnChanges {
  regionKeys = Object.keys(Regions);
  @Input() region: Regions = Regions.africa;
  inputValue: string = '';

  showRegionRadioButtons = true;

  constructor(private store: Store<IStore>) { }

  getCountries() {
    this.store.dispatch(loadCountriesByRegion({ region: this.region }));
  }

  handleFilterButton(regionKey: string) {
    this.region = regionKey as Regions;
    this.getCountries();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["inputValue"]) {
      console.log(this.inputValue)
    }
  }
}
