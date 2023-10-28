import { Component, Input } from '@angular/core';
import { Regions } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-form-content',
  templateUrl: './form-content.component.html',
  styleUrls: ['./form-content.component.scss']
})
export class FormContentComponent {
  regionKeys = Object.keys(Regions);
  @Input() region: Regions = Regions.africa;
}
