import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Interval } from '../../shared'
import { DateRange } from './DateRange'
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IntervalsService } from '../../services/intervals.service';

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

  constructor(
    private fb: FormBuilder,
    private modal: NgbActiveModal,
    private intervals: IntervalsService
  ) {}

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

    this.interval.sum = sum;

    this.intervals.create(this.interval).subscribe((response) => {
      this.modal.close(response);
    });
  }

}
