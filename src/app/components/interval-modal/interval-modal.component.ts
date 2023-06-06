import { Component } from '@angular/core';
import { Interval } from '../../shared'
import { DateRange } from './DateRange'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-interval-modal',
  templateUrl: './interval-modal.component.html',
  styleUrls: ['./interval-modal.component.scss']
})
export class IntervalModalComponent {
  interval = new Interval();
  form = this.fb.group({
    sum: ['', Validators.required]
  })
  sumValidationError = false;

  constructor(private fb: FormBuilder) {}

  handleDatepickerChange(intervalDates: DateRange) {
    this.interval.start = intervalDates.from;
    this.interval.end = intervalDates.till;
  }

  createInterval() {
    const sum = Number(this.form.value.sum);

    if (!sum && isNaN(sum)) {
      this.sumValidationError = true;
      return;
    }
  }

}
