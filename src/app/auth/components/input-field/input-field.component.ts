import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {
  @Input() name!: string;
  @Input() label!: string;
  placeholder = 'Type your field'

  ngOnInit(): void {
    console.log(this.name)
    this.placeholder = 'Type your ' + (this.name || 'field')
  }
}
