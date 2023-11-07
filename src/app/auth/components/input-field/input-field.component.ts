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
  placeholder = 'Type your field'
  @Input() parentForm!: FormGroup;

  ngOnInit(): void {
    console.log(this.name)
    this.placeholder = 'Type your ' + (this.name || 'field')
  }
}
