import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IntervalsService } from '../../../../services/intervals.service';
import { Interval } from '../../../../shared';

@Component({
  selector: 'app-complete-interval-modal',
  templateUrl: './complete-interval-modal.component.html',
  styleUrls: ['./complete-interval-modal.component.scss']
})
export class CompleteIntervalModalComponent implements OnInit {

  @Input()
  interval: Interval;

  constructor(
    private modal: NgbActiveModal,
    private intervals: IntervalsService
  ) { }

  ngOnInit(): void {
  }

  complete() {
    const end = new Date();

    end.setDate(end.getDate() - 1);

    this.interval.end = end;

    this.intervals.update(this.interval).subscribe(() => {
      this.modal.close();
    });
  }

  dismiss() {
    this.modal.dismiss();
  }

}
