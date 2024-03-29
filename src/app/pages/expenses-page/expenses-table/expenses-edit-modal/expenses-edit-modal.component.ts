import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ExpensesService } from '../../../../services/expenses.service';
import { DailyExpensesOverview, Payment } from '../../../../shared';
import { MessagesService } from '../../../../components/messages/messages.service';

@Component({
  selector: 'app-expenses-edit-modal',
  templateUrl: './expenses-edit-modal.component.html',
  styleUrls: ['./expenses-edit-modal.component.scss']
})
export class ExpensesEditModalComponent implements OnInit {
  @Input()
  dailyExpensesOverview?: DailyExpensesOverview;

  isExpensesLoading = false;
  isExpensesSaving = false;
  expenses: Payment[] = [];

  constructor(
    public modal: NgbActiveModal,
    private expensesService: ExpensesService,
    private messages: MessagesService
  ) {}

  ngOnInit() {
    if (!this.dailyExpensesOverview) {
      return;
    }

    this.isExpensesLoading = true;

    this.expensesService.getByDate(this.dailyExpensesOverview).subscribe((expenses) => {
      this.isExpensesLoading = false;
      this.expenses = expenses;
    });
  }

  add() {
    const payment = this.makeNewPaymentObj();

    this.expenses.push(payment);
  }

  removeAdded(payment: Payment) {
    const idx = this.expenses.indexOf(payment);

    this.expenses.splice(idx, 1);
  }

  save() {
    this.isExpensesSaving = true;

    const recordsToSave = this.expenses.filter((record) => record.sum > 0);

    this.expensesService.save(recordsToSave).subscribe(() => {
      this.messages.info('Changes is saved!');
      this.isExpensesSaving = false;
      this.modal.close(true);
    });
  }
  makeNewPaymentObj(): Payment {
    const payment = new Payment();
    this.setPaymentDate(payment);
    payment.add = true;
    return payment;
  }

  setPaymentDate(payment: Payment) {
    const targetDate = this.dailyExpensesOverview!.date;

    payment.time.setFullYear(targetDate?.getFullYear(), targetDate?.getMonth(), targetDate?.getDate());
  }
}
