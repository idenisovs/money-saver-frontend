import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardControlsComponent } from './dashboard-controls/dashboard-controls.component';
import { ExpensesTableComponent } from './expenses-table/expenses-table.component';
import { IntervalControlsComponent } from './interval-controls/interval-controls.component';
import { IntervalOverviewComponent } from './interval-overview/interval-overview.component';
import { ExpensesGraphComponent } from './expenses-graph/expenses-graph.component';
import { CustomPipesModule } from '../../pipes/custom-pipes.module';
import { PaymentInputComponent } from './dashboard-controls/payment-input/payment-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExpensesModalComponent } from './expenses-modal/expenses-modal.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardControlsComponent,
    ExpensesTableComponent,
    IntervalControlsComponent,
    IntervalOverviewComponent,
    ExpensesGraphComponent,
    PaymentInputComponent,
    ExpensesModalComponent
  ],
    imports: [
        CommonModule,
        CustomPipesModule,
        ReactiveFormsModule
    ],
  exports: [DashboardControlsComponent]
})
export class DashboardModule { }
