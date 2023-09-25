import { Component, Input } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { IntervalHelperService } from '../../interval-helper.service';

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

  get IntervalLength(): number {
    if (!this.startDate || !this.finishDate) {
      return 0;
    }

    return this.intervals.getIntervalLength(this.startDate, this.finishDate);
  }

  constructor(private intervals: IntervalHelperService) {
  }

  get StartDate(): Date {
    return this.intervals.getDateFrom(this.startDate);
  }

  get FinishDate(): Date {
    return this.intervals.getDateFrom(this.finishDate);
  }
}
