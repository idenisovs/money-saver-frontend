import { Component } from '@angular/core';
import { Interval } from '../../shared'
import { DateRange } from './DateRange'

@Component({
  selector: 'app-interval-modal',
  templateUrl: './interval-modal.component.html',
  styleUrls: ['./interval-modal.component.scss']
})
export class IntervalModalComponent {
  interval = new Interval();

  handleDatepickerChange(intervalDates: DateRange) {
    this.interval.start = intervalDates.from;
    this.interval.end = intervalDates.till;
  }
}
