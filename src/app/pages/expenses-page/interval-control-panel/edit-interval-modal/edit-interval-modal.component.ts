import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal, NgbDate } from '@ng-bootstrap/ng-bootstrap';

import { IntervalsService } from '../../../../services/intervals.service';
import { Interval } from '../../../../shared';

@Component({
  selector: 'app-edit-interval-modal',
  templateUrl: './edit-interval-modal.component.html',
  styleUrls: ['./edit-interval-modal.component.scss']
})
export class EditIntervalModalComponent implements OnInit {
  latestInterval?: Interval;
  isRequestRunning = false;
  loadingStage = 'Loading latest interval...';
  form = this.fb.group<{
    id: number,
    startDate: NgbDate,
    endDate: NgbDate,
    sum: number
  }>({
    id: 0,
    startDate: this.getNgbDate(new Date()),
    endDate: this.getNgbDate(new Date()),
    sum: 0
  })

  @Input()
  interval?: Interval;

  get MinStartDate(): Date {
    return new Date();
  }

  constructor(
    private intervalsService: IntervalsService,
    private modal: NgbActiveModal,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    if (!this.interval) {
      return;
    }

    this.form.patchValue({
      id: this.interval.id,
      startDate: this.getNgbDate(this.interval.start),
      endDate: this.getNgbDate(this.interval.end),
      sum: this.interval.sum
    });
  }

  save() {
    const raw = this.form.getRawValue();

    const update = new Interval({
      id: raw.id as number,
      start: this.getNativeDate(raw.startDate as NgbDate),
      end: this.getNativeDate(raw.endDate as NgbDate),
      sum: Number(raw.sum)
    });

    console.log(update)
  }

  cancel() {
    this.modal.dismiss();
  }

  private getNgbDate(date: Date): NgbDate {
    return new NgbDate(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    )
  }

  private getNativeDate(date: NgbDate): Date {
    return new Date(date.year, date.month, date.day);
  }
}
