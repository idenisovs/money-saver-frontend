import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-set-additional-data-interval',
  templateUrl: './set-additional-data-interval.component.html',
  styleUrls: ['./set-additional-data-interval.component.scss']
})
export class SetAdditionalDataIntervalComponent {
  @Input()
  sum?: number;

  get IsSumInvalid(): boolean {
    if (!this.sum) {
      return false;
    }

    return isNaN(this.sum);
  }

  @Output()
  changes = new EventEmitter<number>();
}
