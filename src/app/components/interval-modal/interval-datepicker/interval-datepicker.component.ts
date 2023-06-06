import { Component } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-interval-datepicker',
  templateUrl: './interval-datepicker.component.html',
  styleUrls: ['./interval-datepicker.component.scss']
})
export class IntervalDatepickerComponent {
  from: NgbDate|null = null;
  till: NgbDate|null = null;
  hoveredDate: NgbDate|null = null;

  constructor(
    private calendar: NgbCalendar,
    public formatter: NgbDateParserFormatter) {
  }

  onDateSelection(date: NgbDate) {
    if (!this.from && !this.till) {
      this.from = date;
    } else if (this.from && !this.till && date && date.after(this.from)) {
      this.till = date;
    } else {
      this.till = null;
      this.from = date;
    }
  }

  isHovered(date: NgbDate) {
    return (
      this.from && !this.till && this.hoveredDate && date.after(this.from) && date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return this.till && date.after(this.from) && date.before(this.till);
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.from) ||
      (this.till && date.equals(this.till)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);

    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }
}
