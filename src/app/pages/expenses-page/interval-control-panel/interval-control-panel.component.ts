import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Interval } from '../../../shared';
import { LoadingPopupService } from '../../../components/loading-popup/loading-popup.service';
import { MessagesService } from '../../../components/messages/messages.service';
import { IntervalsService } from '../../../services/intervals.service';
import { EditIntervalModalComponent } from './edit-interval-modal/edit-interval-modal.component';
import { IntervalHelperService } from './interval-helper.service';

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
    private intervals: IntervalsService,
    private helper: IntervalHelperService,
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    const today = new Date();
    const interval = changes['interval'].currentValue as Interval;

    this.isIntervalFinished = interval.end <= today;
  }

  async openEditModal() {
    const editModal = this.modal.open(EditIntervalModalComponent, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });

    (editModal.componentInstance as EditIntervalModalComponent).interval = this.interval;

    const result = await this.helper.getModalResult<Interval>(editModal.result);

    if (result) {
      this.changes.emit();
    }
  }
}
