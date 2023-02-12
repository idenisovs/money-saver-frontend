import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ExpensesPageComponent } from './expenses-page.component';
import { NoIntervalsWarningComponent } from './no-intervals-warning/no-intervals-warning.component';
import { SimpleExpensesInputComponent } from './simple-expenses-input/simple-expenses-input.component';
import { ExpensesTableComponent } from './expenses-table/expenses-table.component';
import { IntervalSummaryPanelComponent } from './interval-summary-panel/interval-summary-panel.component';
import { IntervalControlPanelComponent } from './interval-control-panel/interval-control-panel.component';
import { ExpensesEditModalComponent } from './expenses-table/expenses-edit-modal/expenses-edit-modal.component';
import { ComponentsModule } from '../../components/components.module';
import { ExpensesEditRowComponent } from './expenses-table/expenses-edit-modal/expenses-edit-row/expenses-edit-row.component';
import { ExpensesRowViewControlsComponent } from './expenses-table/expenses-edit-modal/expenses-edit-row/expenses-row-view-controls/expenses-row-view-controls.component';
import { ExpensesRowEditControlsComponent } from './expenses-table/expenses-edit-modal/expenses-edit-row/expenses-row-edit-controls/expenses-row-edit-controls.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    ExpensesPageComponent,
    NoIntervalsWarningComponent,
    SimpleExpensesInputComponent,
    ExpensesTableComponent,
    IntervalSummaryPanelComponent,
    IntervalControlPanelComponent,
    ExpensesEditModalComponent,
    ExpensesEditRowComponent,
    ExpensesRowViewControlsComponent,
    ExpensesRowEditControlsComponent,
  ],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		ComponentsModule,
		FormsModule,
		RouterLink
	]
})
export class ExpensesPageModule { }
