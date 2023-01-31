import { Component, Input } from '@angular/core';

import { Day } from '../../../shared';

@Component({
  selector: 'app-expenses-table',
  templateUrl: './expenses-table.component.html',
  styleUrls: ['./expenses-table.component.scss']
})
export class ExpensesTableComponent {
  @Input()
  expenses: Day[] = [];

  getRowStyle(dailyExpensesOverview: Day) {
    const today = this.getDateStr(new Date());
    const expensesDate = this.getDateStr(dailyExpensesOverview.date);

    if (expensesDate < today) {
      return 'table-success';
    }

    if (expensesDate === today) {
      return 'table-info';
    }

    return 'table-light';
  }

  public getDateStr(date = new Date()): string {
    console.log(date.getDate());

    const result: string[] = [];

    result.push(date.getFullYear().toString());

    let mm = (date.getMonth() + 1);

    if (mm < 10) {
      result.push('0' + mm);
    } else {
      result.push(mm.toString())
    }

    const dd = date.getDate();

    if (dd < 10) {
      result.push('0' + dd);
    } else {
      result.push(dd.toString())
    }

    return result.join('-');
  }
}
