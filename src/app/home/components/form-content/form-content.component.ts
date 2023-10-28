import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Regions } from 'src/app/shared/interfaces';
import { IStore } from 'src/app/shared/interfaces/state';
import { loadCountries } from 'src/app/store/app/app.actions';


@Component({
  selector: 'app-form-content',
  templateUrl: './form-content.component.html',
  styleUrls: ['./form-content.component.scss']
})
export class FormContentComponent {
  regionKeys = Object.keys(Regions);
  @Input() region: Regions = Regions.africa;

  showRegionRadioButtons = false;

  constructor(private store: Store<IStore>) { }

  getCountries() {
    this.store.dispatch(loadCountries({ region: this.region }));
  }

  handleFilterButton(regionKey: string) {
    this.region = regionKey as Regions;
    this.getCountries();
  }

}
