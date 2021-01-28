import { Component, Input, OnInit } from '@angular/core';
import { DateRange } from '../date-range/date-range';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date-range-modal',
  templateUrl: './date-range-modal.component.html',
  styleUrls: ['./date-range-modal.component.scss']
})
export class DateRangeModalComponent implements OnInit {

  range: DateRange;

  @Input()
  startingDate = new Date();

  @Input()
  endingDate: Date;

  @Input()
  minDateAny = false;

  constructor(
    private modal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  update(range: DateRange) {
    this.modal.close(range);
  }
}
