import { Component, Input, OnChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Expenses, Interval } from '../../../shared';

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

  constructor() {}

  ngOnChanges() {
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

  addExpenses() {
    const record = new Expenses();

    record.sum = parseFloat(this.simpleExpensesInput.value!);

    this.simpleExpensesInput.reset();
  }
}
