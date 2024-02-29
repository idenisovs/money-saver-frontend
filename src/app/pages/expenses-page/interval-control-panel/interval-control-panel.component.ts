import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Interval } from '../../../shared';
import { LoadingPopupService } from '../../../components/loading-popup/loading-popup.service';
import { MessagesService } from '../../../components/messages/messages.service';
import { IntervalsService } from '../../../services/intervals.service';
import { EditIntervalModalComponent } from './edit-interval-modal/edit-interval-modal.component';
import { IntervalHelperService } from './interval-helper.service';
import { CreateIntervalModalComponent } from './create-interval-modal/create-interval-modal.component';
import { Router } from '@angular/router';

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
    private router: Router,
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

  async openCreateModal() {
    const createModal = this.modal.open(CreateIntervalModalComponent, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });

    (createModal.componentInstance as CreateIntervalModalComponent).previousInterval = this.interval;

    const result = await this.helper.getModalResult<Interval>(createModal.result);

    if (result) {
      await this.router.navigate(['']);
    }
  }

  async finalizeInterval() {
    if (!confirm('Are you sure want to finalize this interval?')) {
      return;
    }

    this.intervals.finish(this.interval).subscribe(() => {
      this.changes.emit();
    });
  }
}
