import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

const SEC = 1000;
const MIN = SEC * 60;
const HOUR = MIN * 60;
const DAY = HOUR * 24;

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

  get IntervalLength(): number {
    const from = this.getDateFrom(this.startDate);
    const till = this.getDateFrom(this.finishDate, true);
    const dT = till.getTime() - from.getTime();
    return Math.ceil(dT / DAY);
  }

  private getDateFrom(date: NgbDate|null, isEndOfDay = false) {
    if (!date) {
      return new Date();
    }

    const result = new Date(date.year, date.month - 1, date.day);

    if (isEndOfDay) {
      result.setHours(23, 59, 59);
    } else {
      result.setHours(0, 0, 0);
    }

    return result;
  }
}
