import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Payment, ScheduleItem } from '../../../shared';
import { PaymentsService } from '../../../services/payments.service';

@Component({
  selector: 'app-expenses-modal',
  templateUrl: './expenses-modal.component.html',
  styleUrls: ['./expenses-modal.component.scss']
})
export class ExpensesModalComponent implements OnInit {
  @Input()
  record: ScheduleItem;

  payments: Payment[] = [];
  editMode = false;

  constructor(
    private modal: NgbActiveModal,
    private paymentsService: PaymentsService
  ) { }

  ngOnInit(): void {
    this.paymentsService.getByDate(this.record.date).subscribe((response) => {
      this.payments = response;
    });
  }

  toggleEdit() {
    this.editMode = !this.editMode;
  }

  save() {
    this.paymentsService.update(this.payments).subscribe(() => {
      this.modal.close('save');
    });
  }

  cancel() {
    this.modal.dismiss('cancel')
  }
}
