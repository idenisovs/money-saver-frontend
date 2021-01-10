import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Payment } from '../../../../shared';

@Component({
  selector: 'tr[app-payment-record]',
  templateUrl: './payment-record.component.html',
  styleUrls: ['./payment-record.component.scss']
})
export class PaymentRecordComponent implements OnInit {

  editable: Payment;

  @Input()
  payment: Payment;

  @Input()
  editMode: boolean;

  @Output()
  edit = new EventEmitter<void>()

  get ContextClasses() {
    return {
      'text-warning': this.payment.update,
      'text-danger strike-payment': this.payment.remove
    };
  }

  constructor() { }

  ngOnInit(): void {
  }

  toggleDelete(payment: Payment) {
    if (payment.remove) {
      delete payment.remove;
    } else {
      payment.remove = true;
    }
  }

  applyEdit() {
    if (this.payment.sum !== this.editable.sum) {
      this.payment.sum = this.editable.sum;
      this.payment.update = true;
    }

    this.toggleEdit();
  }

  cancelEdit() {
    delete this.payment.update;
    delete this.payment.remove;
    this.toggleEdit();
  }

  toggleEdit() {
    if (this.editMode) {
      delete this.editable;
    } else {
      this.editable = { ...this.payment } as Payment;
    }

    this.edit.emit();
  }

}
