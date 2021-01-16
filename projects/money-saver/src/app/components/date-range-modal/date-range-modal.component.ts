import { Component, OnInit } from '@angular/core';
import { DateRange } from '../date-range/date-range';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date-range-modal',
  templateUrl: './date-range-modal.component.html',
  styleUrls: ['./date-range-modal.component.scss']
})
export class DateRangeModalComponent implements OnInit {

  range: DateRange;

  constructor(
    private modal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  update(range: DateRange) {
    this.range = range;
  }

  accept() {
    this.modal.close(this.range);
  }
}
