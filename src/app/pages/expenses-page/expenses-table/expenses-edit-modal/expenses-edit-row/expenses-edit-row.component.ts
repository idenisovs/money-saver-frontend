import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Payment } from '../../../../../shared';

@Component({
  selector: 'tr[app-expenses-edit-row]',
  templateUrl: './expenses-edit-row.component.html',
  styleUrls: ['./expenses-edit-row.component.scss']
})
export class ExpensesEditRowComponent implements OnInit {
  @Input()
  payment!: Payment;

  @Input()
  disabled = false;

  @Output()
  removeAddedPayment = new EventEmitter<void>();

  isEditMode = false;
  isWrongValue = false;
  previousValue = 0;

  get IsEditMode(): boolean {
    return this.isEditMode;
  }

  get IsViewMode(): boolean {
    return !this.IsEditMode;
  }

  get PaymentViewStyle() {
    if (this.payment.add) {
      return 'text-primary';
    }

    if (this.payment.remove) {
      return 'text-decoration-line-through text-secondary';
    }

    if (this.payment.update) {
      return 'text-info';
    }

    return '';
  }

  ngOnInit() {
    if (this.payment && this.payment.add) {
      this.toggleEditMode();
    }
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;

    if (!this.isEditMode || !this.payment?.sum) {
      return;
    }

    this.previousValue = this.payment.sum;
  }

  remove() {
    if (this.payment.add) {
      this.removeAddedPayment.emit();
    } else {
      this.payment.remove = !this.payment.remove;
    }
  }

  cancel() {
    this.payment.sum = this.previousValue;
    this.isEditMode = false;
    this.payment.remove = false;
  }

  acceptChanges() {
    if (!this.payment.add) {
      this.payment.update = true;
    }

    this.isEditMode = false;
  }

  updatePaymentValue(event: Event) {
    const { value } = event.target as HTMLInputElement;

    const sum = Number(value);

    if (isNaN(sum)) {
      this.isWrongValue = true;
      this.payment.sum = this.previousValue;
      return;
    }

    this.isWrongValue = false;
    this.payment.sum = sum;
  }
}
