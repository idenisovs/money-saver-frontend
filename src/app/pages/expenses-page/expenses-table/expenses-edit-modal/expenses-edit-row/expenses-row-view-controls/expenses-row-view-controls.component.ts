import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Payment } from '../../../../../../shared';

@Component({
  selector: 'app-expenses-row-view-controls',
  templateUrl: './expenses-row-view-controls.component.html',
  styleUrls: ['./expenses-row-view-controls.component.scss']
})
export class ExpensesRowViewControlsComponent {
  @Input()
  payment!: Payment;

  @Input()
  disabled = false;

  @Output()
  edit = new EventEmitter<void>();

  @Output()
  remove = new EventEmitter<void>();

  @Output()
  cancel = new EventEmitter<void>();
}
