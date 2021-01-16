import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { DateRange } from './date-range';

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss'],
  providers: [
    { provide: NgbDateNativeAdapter, useClass: NgbDateNativeAdapter }
  ]
})
export class DateRangeComponent implements OnInit {

  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate;
  toDate: NgbDate;

  @Input()
  starting: Date = new Date();

  @Output()
  changes = new EventEmitter<DateRange>();

  constructor(
    private calendar: NgbCalendar,
    private adapter: NgbDateNativeAdapter
  ) {}

  ngOnInit(): void {
    const intervalEndingDate = NgbDate.from(this.adapter.fromModel(this.starting));

    this.fromDate = this.calendar.getNext(intervalEndingDate, 'd', 1);
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;

      this.changes.emit({
        from: new Date(`${this.fromDate.year}-${this.fromDate.month}-${this.fromDate.day}`),
        till: new Date(`${this.toDate.year}-${this.toDate.month}-${this.toDate.day}`)
      });
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

}
