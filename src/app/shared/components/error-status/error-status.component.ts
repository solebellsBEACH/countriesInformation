import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-status',
  templateUrl: './error-status.component.html',
  styleUrls: ['./error-status.component.scss']
})
export class ErrorStatusComponent {
  @Input() errorMessage: string = "Ops, I can see a error on system..."
}
