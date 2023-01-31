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
}
