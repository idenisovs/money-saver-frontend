import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { CreateIntervalStages } from './CreateIntervalStages';
import { SelectedInterval } from '../../../../components/select-interval/SelectedInterval';
import { Interval } from '../../../../shared';
import { IntervalHelperService } from '../interval-helper.service';
import { IntervalsService } from '../../../../services/intervals.service';

@Component({
  selector: 'app-create-interval-modal',
  templateUrl: './create-interval-modal.component.html',
  styleUrls: ['./create-interval-modal.component.scss']
})
export class CreateIntervalModalComponent {
  stage = CreateIntervalStages.NO_INTERVAL_SELECTED;
  startDate: NgbDate|null = null;
  finishDate: NgbDate|null = null;
  intervalSum?: number;
  isRequestRunning = false;

  @Input()
  previousInterval?: Interval;

  get PreviousIntervalEnd(): NgbDate {
    if (!this.previousInterval) {
      return new NgbDate(2012, 1, 1);
    }

    const finishDate = this.previousInterval.end;

    return new NgbDate(
      finishDate.getFullYear(),
      finishDate.getMonth() + 1,
      finishDate.getDate()
    );
  }

  get IsPreviewDisabled() {
    return !this.intervalSum || isNaN(this.intervalSum);
  }

  get DailyBalance() {
    if (!this.startDate || !this.finishDate || !this.intervalSum) {
      return 0;
    }

    const intervalLength = this.helper.getIntervalLength(this.startDate, this.finishDate);

    return this.intervalSum / intervalLength;
  }

  constructor(
    private modal: NgbActiveModal,
    private helper: IntervalHelperService,
    private intervals: IntervalsService
  ) {}

  setStage(stage: CreateIntervalStages) {
    this.stage = stage;
  }

  updateDates(selectedDates: SelectedInterval) {
    this.startDate = selectedDates.start;
    this.finishDate = selectedDates.finish;
  }

  updateSum(sum: number) {
    this.intervalSum = sum;
  }

  save() {
    this.isRequestRunning = true;

    const interval = new Interval();

    interval.start = this.helper.getDateFrom(this.startDate);
    interval.end = this.helper.getDateFrom(this.finishDate);
    interval.sum = this.intervalSum as number;

    this.intervals.create(interval).subscribe((createdInterval) => {
      this.isRequestRunning = false;
      this.modal.close(createdInterval);
    })
  }

  cancel() {
    this.modal.dismiss('cancel');
  }

  protected readonly CreateIntervalStages = CreateIntervalStages;
}
