import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { SelectedInterval } from './SelectedInterval';

@Component({
  selector: 'app-select-interval',
  templateUrl: './select-interval.component.html',
  styleUrls: ['./select-interval.component.scss']
})
export class SelectIntervalComponent implements OnInit {
  hoveredDate: NgbDate | null = null;

  @Input()
  startDate: NgbDate | null = null;

  @Input()
  finishDate: NgbDate | null = null;

  @Input()
  minDate = new NgbDate(2012, 1, 1)

  @Output()
  change = new EventEmitter<SelectedInterval>();

  constructor(
    private calendar: NgbCalendar,
  ) {}

  ngOnInit() {
    if (this.startDate && this.finishDate) {
      return;
    }

    this.startDate = this.calendar.getToday();
    this.finishDate = this.calendar.getNext(this.calendar.getToday(), 'd', 14)
  }

  onDateSelection(date: NgbDate) {
    if (!this.startDate && !this.finishDate) {
      this.startDate = date;
    } else if (this.startDate && !this.finishDate && date.after(this.startDate)) {
      this.finishDate = date;
    } else {
      this.finishDate = null;
      this.startDate = date;
    }

    this.change.emit({
      start: this.startDate,
      finish: this.finishDate
    });
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.startDate) ||
      (this.finishDate && date.equals(this.finishDate)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }

  isHovered(date: NgbDate) {
    return (
      this.startDate && !this.finishDate && this.hoveredDate && date.after(this.startDate) && date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return this.finishDate && date.after(this.startDate) && date.before(this.finishDate);
  }
}
