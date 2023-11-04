import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from 'src/app/shared/interfaces/state';

@Component({
  selector: 'app-animated-input',
  templateUrl: './animated-input.component.html',
  styleUrls: ['./animated-input.component.scss'],
})
export class AnimatedInputComponent {
  @Input() inputValue: string = '';

  constructor(private store: Store<IStore>) { }


  // getCountries() {
  //   this.store.dispatch(loadCountries({ region: this.region }));
  // }

  handleFilterButton() {
    console.log(this.inputValue)
    //   this.region = regionKey as Regions;
    //   this.getCountries();
  }
}
