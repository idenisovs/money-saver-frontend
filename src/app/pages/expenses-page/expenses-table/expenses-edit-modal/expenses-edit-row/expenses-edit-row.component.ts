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

  @Output()
  removeAddedPayment = new EventEmitter<void>();

  isEditMode = false;

  editableValue?: string;

  get IsEditMode(): boolean {
    return this.isEditMode;
  }

  get IsViewMode(): boolean {
    return !this.IsEditMode;
  }

  ngOnInit() {
    if (this.payment && this.payment.add) {
      this.toggleEditMode();
    }
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;

    if (this.isEditMode) {
      this.editableValue = this.payment!.sum.toFixed(2);
    }
  }

  remove() {
    if (this.payment.add) {
      this.removeAddedPayment.emit();
    } else {
      this.payment.remove = !this.payment.remove;
    }
  }

  cancel() {
    delete this.editableValue;
    this.isEditMode = false;
    this.payment.remove = false;
  }

  acceptChanges() {
    if (typeof this.editableValue === 'undefined') {
      return;
    }

    if (!this.payment.add) {
      this.payment.update = true;
    }

    this.payment.sum = parseFloat(this.editableValue);
    this.isEditMode = false;
    delete this.editableValue;
  }

  getPaymentViewStyle() {
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
}
