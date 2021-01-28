import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Interval } from '../../../shared';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompleteIntervalModalComponent } from './complete-interval-modal/complete-interval-modal.component';
import { EditIntervalModalComponent } from './edit-interval-modal/edit-interval-modal.component';

@Component({
  selector: 'app-interval-controls',
  templateUrl: './interval-controls.component.html',
  styleUrls: ['./interval-controls.component.scss']
})
export class IntervalControlsComponent implements OnInit {
  @Input()
  interval: Interval;

  @Output()
  changes = new EventEmitter<void>();

  get IsLatest(): boolean {
    if (!this.interval) {
      return false;
    }

    return this.interval.latest;
  }

  get IsActive(): boolean {
    if (!this.interval) {
      return false;
    }

    return this.interval.end.getTime() > Date.now()
  }

  get IsInactive(): boolean {
    if (!this.interval) {
      return true;
    }

    return !this.interval.latest || this.interval.end.getTime() < Date.now();
  }

  constructor(
    private modal: NgbModal
  ) { }

  ngOnInit(): void {
  }

  async create() {
    const modal = this.modal.open(EditIntervalModalComponent, {});

    (modal.componentInstance as EditIntervalModalComponent).interval = this.interval;

    try {
      await modal.result;

      this.changes.emit();
    } catch(e) {
      // nothing to do here
    }
  }

  async edit() {
    const modal = this.modal.open(EditIntervalModalComponent, {});

    (modal.componentInstance as EditIntervalModalComponent).interval = this.interval;
    (modal.componentInstance as EditIntervalModalComponent).edit = true;

    try {
      await modal.result;

      this.changes.emit();
    } catch(e) {
      // nothing to do here
    }
  }

  async complete() {
    const modal = this.modal.open(CompleteIntervalModalComponent, {
      centered: true,
      backdrop: 'static'
    });

    (modal.componentInstance as CompleteIntervalModalComponent).interval = this.interval;

    try {
      await modal.result;
      this.changes.emit();
    } catch (e) {
      // nothing to do
    }
  }

}
