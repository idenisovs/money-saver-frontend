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
  edit: boolean = false;

  @Input()
  interval: Interval;

  intervalForm = this.makeCreateForm();

  constructor(
    private modalService: NgbModal,
    private modal: NgbActiveModal,
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private intervals: IntervalsService
  ) { }

  ngOnInit(): void {
    if (this.edit) {
      this.intervalForm = this.makeEditForm();
    }

    this.intervalForm.get('fromLabel').disable();
    this.intervalForm.get('tillLabel').disable();
  }

  async openDateRangeModal() {
    const dateRangeModal = this.modalService.open(DateRangeModalComponent, {
      centered: true,
      backdrop: 'static'
    });

    const dateRangeComponent = dateRangeModal.componentInstance as DateRangeModalComponent;
    const startingDate = new Date();

    if (this.edit) {
      dateRangeComponent.startingDate = this.interval.start;
      dateRangeComponent.endingDate = this.interval.end;
    } else if (this.interval) {
      startingDate.setDate(this.interval.end.getDate() + 1);
      dateRangeComponent.startingDate = startingDate;
    } else {
      dateRangeComponent.startingDate = startingDate;
    }

    if (this.interval && this.interval.end.getTime() > Date.now()) {
      dateRangeComponent.minDateAny = true;
    }

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

    const interval = new Interval({
      id: value.id,
      start: value.from,
      end: value.till,
      sum: parseFloat(value.sum)
    });

    this.request(interval).subscribe(() => {
      this.modal.close('saved');
    });
  }

  cancel() {
    this.modal.dismiss('cancel');
  }

  request(interval: Interval) {
    if (this.edit) {
      return this.intervals.update(interval);
    } else {
      return this.intervals.create(interval);
    }
  }

  makeCreateForm() {
    return this.fb.group({
      id: [''],
      fromLabel: [ '', Validators.required ],
      tillLabel: [ '', Validators.required ],
      from: [ '' ],
      till: [ '' ],
      sum: [ '', [ Validators.required, NumberValidator() ] ]
    });
  }

  makeEditForm() {
    return this.fb.group({
      id: [ this.interval.id.toString() ],
      fromLabel: [ this.datePipe.transform(this.interval.start), Validators.required ],
      tillLabel: [ this.datePipe.transform(this.interval.end), Validators.required ],
      from: [ this.interval.start.getTime() ],
      till: [ this.interval.end.getTime() ],
      sum: [ this.interval.sum.toString(), [ Validators.required, NumberValidator() ] ]
    });
  }

}
