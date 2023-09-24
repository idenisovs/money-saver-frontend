import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-preview-interval-dates',
  templateUrl: './preview-interval-dates.component.html',
  styleUrls: ['./preview-interval-dates.component.scss']
})
export class PreviewIntervalDatesComponent {
  @Input()
  startDate: NgbDate|null = null;

  @Input()
  finishDate: NgbDate|null = null;

  @Output()
  selectInterval = new EventEmitter();

  get StartDate(): Date {
    return this.getDateFrom(this.startDate);
  }

  get FinishDate(): Date {
    return this.getDateFrom(this.finishDate);
  }

  private getDateFrom(date: NgbDate|null) {
    if (!date) {
      return new Date();
    }

    return new Date(date.year, date.month - 1, date.day);
  }
}
