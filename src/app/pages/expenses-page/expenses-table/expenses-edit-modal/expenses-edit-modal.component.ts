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

  isExpensesLoading = true;
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
}
