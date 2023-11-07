import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {
  @Input() name!: string;
  @Input() label!: string;
  @Input() parentForm!: FormGroup;

  placeholder = 'Type your field'

  ngOnInit(): void {
    console.log(this.name)
    this.placeholder = 'Type your ' + (this.name || 'field')
  }
}
