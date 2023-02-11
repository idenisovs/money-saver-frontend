import { Component, Input } from '@angular/core';

import { Payment } from '../../../../../shared';

@Component({
  selector: 'tr[app-expenses-edit-row]',
  templateUrl: './expenses-edit-row.component.html',
  styleUrls: ['./expenses-edit-row.component.scss']
})
export class ExpensesEditRowComponent {
  @Input()
  payment!: Payment;

  isEditMode = false;

  editableValue?: string;

  get IsEditMode(): boolean {
    return this.isEditMode;
  }

  get IsViewMode(): boolean {
    return !this.IsEditMode;
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;

    if (this.isEditMode) {
      this.editableValue = this.payment!.sum.toFixed(2);
    }
  }

  toggleRemoveFlagOnRecord() {
    this.payment.remove = !this.payment.remove;
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

    this.payment.sum = parseFloat(this.editableValue);
    this.payment.update = true;
    this.isEditMode = false;
    delete this.editableValue;
  }

  getPaymentViewStyle() {
    if (this.payment.remove) {
      return 'text-decoration-line-through text-secondary';
    }

    if (this.payment.update) {
      return 'text-info';
    }

    return '';
  }
}
