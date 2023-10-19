import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Interval } from '../../../shared';
import { LoadingPopupService } from '../../../components/loading-popup/loading-popup.service';
import { MessagesService } from '../../../components/messages/messages.service';
import { IntervalsService } from '../../../services/intervals.service';
import { EditIntervalModalComponent } from './edit-interval-modal/edit-interval-modal.component';

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

  openEditModal() {
    const editModal = this.modal.open(EditIntervalModalComponent, {
      centered: true,
      size: 'lg'
    });

    (editModal.componentInstance as EditIntervalModalComponent).interval = this.interval;
  }
}
