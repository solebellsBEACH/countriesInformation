import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {
  fieldControl = new FormControl({
    value: '',
    disabled: false
  });


  ngOnInit(): void {
    console.log(this.fieldControl)
  }
}
