import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal, NgbDate } from '@ng-bootstrap/ng-bootstrap';

import { IntervalsService } from '../../../../services/intervals.service';
import { Interval } from '../../../../shared';
import { IntervalHelperService } from '../interval-helper.service';
import EditIntervalForm from './EditIntervalForm';

@Component({
  selector: 'app-edit-interval-modal',
  templateUrl: './edit-interval-modal.component.html',
  styleUrls: ['./edit-interval-modal.component.scss']
})
export class EditIntervalModalComponent implements OnInit {
  previousInterval?: Interval;
  isRequestRunning = false;
  loadingStage = 'Loading previous interval...';
  form = this.fb.group<EditIntervalForm>({
    id: 0,
    startDate: this.getNgbDate(new Date()),
    endDate: this.getNgbDate(new Date()),
    sum: 0
  });

  @Input()
  interval?: Interval;

  get PreviousIntervalEnd(): NgbDate {
    if (!this.previousInterval) {
      return new NgbDate(2012, 1, 1);
    }

    const finishDate = this.previousInterval.end;

    return new NgbDate(
      finishDate.getFullYear(),
      finishDate.getMonth() + 1,
      finishDate.getDate() + 1
    );
  }

  get IntervalLength(): number {
    if (!this.interval) {
      return 0;
    }

    const startDate = this.form.getRawValue().startDate;
    const endDate = this.form.getRawValue().endDate;

    const result = this.helper.getIntervalLength(startDate, endDate);

    if (result > 0) {
      return result;
    }

    return 0;
  }

  get DailyBalance(): number {
    if (!this.interval) {
      return 0;
    }

    const sum = this.form.getRawValue().sum ?? 0;

    if (this.IntervalLength <= 0) {
      return 0;
    }

    return sum / this.IntervalLength;
  }

  get IsDatesWrong(): boolean {
    const { startDate, endDate } = this.form.value;

    if (!startDate || !endDate) {
      return true;
    }

    const start = NgbDate.from(startDate);

    if (!start) {
      return true;
    }

    return start.after(endDate);
  }

  constructor(
    private intervalsService: IntervalsService,
    private helper: IntervalHelperService,
    private modal: NgbActiveModal,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    if (!this.interval) {
      return;
    }

    this.updateForm(this.interval);
    this.loadPreviousInterval(this.interval);
  }

  updateForm(interval: Interval) {
    this.form.patchValue({
      id: interval.id,
      startDate: this.getNgbDate(interval.start),
      endDate: this.getNgbDate(interval.end),
      sum: interval.sum
    });
  }

  save() {
    const raw = this.form.getRawValue();

    const intervalUpdate = new Interval({
      id: raw.id as number,
      start: this.getNativeDate(raw.startDate as NgbDate),
      end: this.getNativeDate(raw.endDate as NgbDate),
      sum: Number(raw.sum)
    });

    this.isRequestRunning = true;
    this.loadingStage = 'Updating interval...';
    delete this.interval;

    this.intervalsService.update(intervalUpdate).subscribe((updatedInterval: Interval) => {
      this.modal.close(updatedInterval);
      this.isRequestRunning = false;
    });
  }

  cancel() {
    this.modal.dismiss();
  }

  private loadPreviousInterval(interval: Interval) {
    this.isRequestRunning = true;

    this.intervalsService.getPrevious(interval).subscribe((previousInterval: Interval|null) => {
      if (previousInterval) {
        this.previousInterval = previousInterval
      }

      this.isRequestRunning = false;
    });
  }

  private getNgbDate(date: Date): NgbDate {
    return new NgbDate(
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate()
    )
  }

  private getNativeDate(date: NgbDate): Date {
    return new Date(date.year, date.month - 1, date.day);
  }
}
