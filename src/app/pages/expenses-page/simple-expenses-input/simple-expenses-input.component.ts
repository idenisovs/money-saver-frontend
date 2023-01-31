import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Interval, Payment } from '../../../shared';
import { ExpensesService } from '../../../services/expenses.service';
import { MessagesService } from '../../../components/messages/messages.service';

@Component({
  selector: 'app-simple-expenses-input',
  templateUrl: './simple-expenses-input.component.html',
  styleUrls: ['./simple-expenses-input.component.scss']
})
export class SimpleExpensesInputComponent implements OnChanges {
  simpleExpensesInput = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\d+(\.\d+)?$/)
  ]);

  isIntervalActive = false;

  @Input()
  interval?: Interval;

  @Output()
  changes = new EventEmitter<void>();

  constructor(
    private expenses: ExpensesService,
    private messages: MessagesService
  ) {}

  ngOnChanges() {
    this.setSimpleExpensesInputAvailability();
  }

  public addExpenses() {
    const record = new Payment();

    record.sum = parseFloat(this.simpleExpensesInput.value!);

    this.expenses.add(record).subscribe(() => {
      this.messages.info('Expenses record added!');
      this.simpleExpensesInput.reset();
      this.changes.emit();
    });
  }

  private setSimpleExpensesInputAvailability() {
    if (!this.interval) {
      return;
    }

    const today = Date.now();

    const start = this.interval.start.getTime();
    const end = this.interval.end.getTime();

    this.isIntervalActive = start <= today && today <= end;

    if (this.isIntervalActive) {
      this.simpleExpensesInput.enable();
    } else {
      this.simpleExpensesInput.disable();
    }
  }
}
