import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BaseChartDirective } from 'ng2-charts';

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
import { ExpensesChartPanelComponent } from './expenses-chart-panel/expenses-chart-panel.component';
import { IntervalFinishConfirmationModalComponent } from './interval-control-panel/interval-finish-confirmation-modal/interval-finish-confirmation-modal.component';
import { CreateIntervalModalComponent } from './interval-control-panel/create-interval-modal/create-interval-modal.component';
import { NgbDatepicker, NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { PreviewIntervalDatesComponent } from './interval-control-panel/create-interval-modal/preview-interval-dates/preview-interval-dates.component';
import { SelectIntervalAlertComponent } from './interval-control-panel/create-interval-modal/select-interval-alert/select-interval-alert.component';
import { SetAdditionalDataIntervalComponent } from './interval-control-panel/set-additional-data-interval/set-additional-data-interval.component';
import { EditIntervalModalComponent } from './interval-control-panel/edit-interval-modal/edit-interval-modal.component';
import { PipesModule } from '../../pipes/pipes.module';

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
    IntervalFinishConfirmationModalComponent,
    CreateIntervalModalComponent,
    PreviewIntervalDatesComponent,
    SelectIntervalAlertComponent,
    SetAdditionalDataIntervalComponent,
    EditIntervalModalComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule,
    FormsModule,
    RouterLink,
    BaseChartDirective,
    NgbInputDatepicker,
    NgbDatepicker,
    PipesModule,
    ExpensesChartPanelComponent
  ]
})
export class ExpensesPageModule { }
