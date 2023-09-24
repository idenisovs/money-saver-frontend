import { Component } from '@angular/core';
import { NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-select-interval',
  templateUrl: './select-interval.component.html',
  styleUrls: ['./select-interval.component.scss']
})
export class SelectIntervalComponent {
  hoveredDate: NgbDate | null = null;

  startDate: NgbDate;
  finishDate: NgbDate | null = null;

  constructor(
    calendar: NgbCalendar,
  ) {
    this.startDate = calendar.getToday();
    this.finishDate = calendar.getNext(calendar.getToday(), 'd', 14)
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
