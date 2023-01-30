import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesPageComponent } from './expenses-page.component';
import { NoIntervalsWarningComponent } from './no-intervals-warning/no-intervals-warning.component';
import { SimpleExpensesInputComponent } from './simple-expenses-input/simple-expenses-input.component';
import { ExpensesTableComponent } from './expenses-table/expenses-table.component';
import { IntervalSummaryPanelComponent } from './interval-summary-panel/interval-summary-panel.component';
import { IntervalControlPanelComponent } from './interval-control-panel/interval-control-panel.component';

@NgModule({
  declarations: [
    ExpensesPageComponent,
    NoIntervalsWarningComponent,
    SimpleExpensesInputComponent,
    ExpensesTableComponent,
    IntervalSummaryPanelComponent,
    IntervalControlPanelComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ExpensesPageModule { }
