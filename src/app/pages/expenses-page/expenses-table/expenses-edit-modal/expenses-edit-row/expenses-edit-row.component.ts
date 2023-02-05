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
}
