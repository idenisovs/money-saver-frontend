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

  constructor(
    private modal: NgbActiveModal,
    private paymentsService: PaymentsService
  ) { }

  ngOnInit(): void {
    this.paymentsService.getByDate(this.record.date).subscribe((response) => {
      this.payments = response;
    });
  }

  add() {
    const payment = new Payment(0);

    payment.add = true;
    payment.date = Payment.date(this.record.date);

    this.payments.push(payment);
  }

  save() {
    const payments = this.payments.filter((payment) => !(payment.add && payment.remove));

    if (!payments.length) {
      return this.modal.close('nothing-to-do');
    }

    this.paymentsService.update(payments).subscribe(() => {
      this.modal.close('save');
    });
  }

  cancel() {
    this.modal.dismiss('cancel')
  }
}
