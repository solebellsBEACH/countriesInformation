import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.scss']
})
export class FilterButtonComponent {
  @Input() label: string = '';
  @Input() value: string = '';
  @Output() onClick: EventEmitter<string> = new EventEmitter();

  buttonClick() {
    this.onClick.emit(this.value);
  }
}
