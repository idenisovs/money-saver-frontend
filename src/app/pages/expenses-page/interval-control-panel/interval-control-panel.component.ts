import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Interval } from '../../../shared';
import {
  IntervalFinishConfirmationModalComponent
} from './interval-finish-confirmation-modal/interval-finish-confirmation-modal.component';
import { LoadingPopupService } from '../../../components/loading-popup/loading-popup.service';
import { MessagesService } from '../../../components/messages/messages.service';
import { IntervalsService } from '../../../services/intervals.service';
import { CreateIntervalModalComponent } from './create-interval-modal/create-interval-modal.component';

@Component({
  selector: 'app-interval-control-panel',
  templateUrl: './interval-control-panel.component.html',
  styleUrls: ['./interval-control-panel.component.scss']
})
export class IntervalControlPanelComponent implements OnChanges {
  isIntervalFinished = false;

  @Input()
  interval = new Interval();

  @Output()
  changes = new EventEmitter<void>();

  constructor(
    private modal: NgbModal,
    private loadingPopup: LoadingPopupService,
    private messages: MessagesService,
    private intervals: IntervalsService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    const today = new Date();
    const interval = changes['interval'].currentValue as Interval;

    this.isIntervalFinished = interval.end <= today;
  }

  async startNewInterval() {
    const createIntervalModal = this.modal.open(CreateIntervalModalComponent, {
      centered: true,
    });

    try {
      await createIntervalModal.result;
    } catch (e) {}
  }

  async displayFinishConfirmation() {
    const modalRef = this.modal.open(IntervalFinishConfirmationModalComponent);

    const finishConfirmationModal = modalRef.componentInstance as IntervalFinishConfirmationModalComponent;

    finishConfirmationModal.interval = this.interval;

    try {
      await modalRef.result;
      this.finishCurrentInterval();
    } catch (e) {}
  }

  finishCurrentInterval() {
    this.loadingPopup.open({
      message: 'Finishing current interval...'
    });

    this.intervals.finish(this.interval).subscribe(() => {
      this.loadingPopup.close();
      this.messages.info('Interval is finished!');
      this.changes.emit();
    });
  }
}
