import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select-interval-alert',
  templateUrl: './select-interval-alert.component.html',
  styleUrls: ['./select-interval-alert.component.scss']
})
export class SelectIntervalAlertComponent {
  @Output()
  selectInterval = new EventEmitter();
}
