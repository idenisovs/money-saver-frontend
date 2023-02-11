import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ExpensesService } from '../../../../services/expenses.service';
import { DailyExpensesOverview, Payment } from '../../../../shared';

@Component({
  selector: 'app-expenses-edit-modal',
  templateUrl: './expenses-edit-modal.component.html',
  styleUrls: ['./expenses-edit-modal.component.scss']
})
export class ExpensesEditModalComponent implements OnInit {
  @Input()
  dailyExpensesOverview?: DailyExpensesOverview;

  isExpensesLoading = false;
  expenses: Payment[] = [];

  constructor(
    public modal: NgbActiveModal,
    private expensesService: ExpensesService
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
    const payment = new Payment();
    payment.add = true;
    this.expenses.push(payment);
  }

  removeAdded(payment: Payment) {
    const idx = this.expenses.indexOf(payment);

    this.expenses.splice(idx, 1);
  }

  save() {
    console.log(this.expenses);
    this.modal.close();
  }
}
