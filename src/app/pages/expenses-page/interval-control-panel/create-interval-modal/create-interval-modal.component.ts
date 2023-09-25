import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { CreateIntervalStages } from './CreateIntervalStages';
import { SelectedInterval } from '../../../../components/select-interval/SelectedInterval';
import { Interval } from '../../../../shared';

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

  constructor(
    private modal: NgbActiveModal
  ) {}

  setStage(stage: CreateIntervalStages) {
    this.stage = stage;
  }

  updateDates(selectedDates: SelectedInterval) {
    this.startDate = selectedDates.start;
    this.finishDate = selectedDates.finish;
  }

  cancel() {
    this.modal.dismiss('cancel');
  }

  protected readonly CreateIntervalStages = CreateIntervalStages;
  protected readonly isNaN = isNaN;
}
