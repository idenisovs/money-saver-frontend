import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Payment } from '../../../../../../shared';

@Component({
  selector: 'app-expenses-row-edit-controls',
  templateUrl: './expenses-row-edit-controls.component.html',
  styleUrls: ['./expenses-row-edit-controls.component.scss']
})
export class ExpensesRowEditControlsComponent {
  @Input()
  payment!: Payment;

  @Output()
  accept = new EventEmitter<void>();

  @Output()
  decline = new EventEmitter<void>();
}
