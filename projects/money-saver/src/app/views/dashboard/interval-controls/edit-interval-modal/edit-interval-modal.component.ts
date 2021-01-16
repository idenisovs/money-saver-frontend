import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DateRange } from '../../../../components/date-range/date-range';
import { Interval } from '../../../../shared';

@Component({
  selector: 'app-edit-interval-modal',
  templateUrl: './edit-interval-modal.component.html',
  styleUrls: ['./edit-interval-modal.component.scss']
})
export class EditIntervalModalComponent implements OnInit {

  @Input()
  current: Interval;

  constructor(
    private modal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  updateDateRange(range: DateRange) {
    console.log(range);
  }

  save() {
    this.modal.close('save');
  }

  cancel() {
    this.modal.dismiss('cancel');
  }

}
