import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Interval } from '../../../../shared';
import { NumberValidator } from '../../../../validators';
import { DateRangeModalComponent } from '../../../../components/date-range-modal/date-range-modal.component';
import { DateRange } from '../../../../components/date-range/date-range';
import { IntervalsService } from '../../../../services/intervals.service';

@Component({
  selector: 'app-edit-interval-modal',
  templateUrl: './edit-interval-modal.component.html',
  styleUrls: ['./edit-interval-modal.component.scss'],
  providers: [ DatePipe ]
})
export class EditIntervalModalComponent implements OnInit {

  @Input()
  latestInterval: Interval;

  intervalForm = this.fb.group({
    fromLabel: [ '', Validators.required ],
    tillLabel: [ '', Validators.required ],
    from: [ '' ],
    till: [ '' ],
    sum: [ '', [ Validators.required, NumberValidator() ] ]
  });

  constructor(
    private modalService: NgbModal,
    private modal: NgbActiveModal,
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private intervals: IntervalsService
  ) { }

  ngOnInit(): void {
    this.intervalForm.get('fromLabel').disable();
    this.intervalForm.get('tillLabel').disable();
  }

  async openDateRangeModal() {
    const dateRangeModal = this.modalService.open(DateRangeModalComponent, {
      centered: true,
      backdrop: 'static'
    });

    (dateRangeModal.componentInstance as DateRangeModalComponent).startingDate = this.latestInterval.end;

    try {
      const range = await dateRangeModal.result as DateRange;

      this.intervalForm.get('fromLabel').setValue(this.datePipe.transform(range.from));
      this.intervalForm.get('from').setValue(range.from.getTime());

      this.intervalForm.get('tillLabel').setValue(this.datePipe.transform(range.till));
      this.intervalForm.get('till').setValue(range.till.getTime());
    } catch (e) {
      // nothing to do here
    }
  }

  save() {
    const value = this.intervalForm.value;

    this.intervals.create(new Interval({
      start: value.from,
      end: value.till,
      sum: value.sum,
      latest: 1
    })).subscribe(() => {
      this.modal.close('saved');
    });
  }

  cancel() {
    this.modal.dismiss('cancel');
  }

}
