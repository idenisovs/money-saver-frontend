import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-set-additional-data-interval',
  templateUrl: './set-additional-data-interval.component.html',
  styleUrls: ['./set-additional-data-interval.component.scss']
})
export class SetAdditionalDataIntervalComponent {
  isWrongValue = false;

  @Output()
  changes = new EventEmitter<number>();

  handleSumChanges(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    const sum = Number(value);

    this.isWrongValue = isNaN(sum);

    this.changes.emit(sum);
  }
}
