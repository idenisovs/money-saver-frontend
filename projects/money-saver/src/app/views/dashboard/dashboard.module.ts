import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard.component';
import { DashboardControlsComponent } from './dashboard-controls/dashboard-controls.component';
import { ExpensesTableComponent } from './expenses-table/expenses-table.component';
import { IntervalControlsComponent } from './interval-controls/interval-controls.component';
import { IntervalOverviewComponent } from './interval-overview/interval-overview.component';
import { ExpensesGraphComponent } from './expenses-graph/expenses-graph.component';
import { CustomPipesModule } from '../../pipes/custom-pipes.module';
import { PaymentInputComponent } from './dashboard-controls/payment-input/payment-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExpensesModalComponent } from './expenses-modal/expenses-modal.component';
import { PaymentRecordComponent } from './expenses-modal/payment-record/payment-record.component';
import { CompleteIntervalModalComponent } from './interval-controls/complete-interval-modal/complete-interval-modal.component';
import { ComponentsModule } from '../../components/components.module';
import { EditIntervalModalComponent } from './interval-controls/edit-interval-modal/edit-interval-modal.component';
import { ChartsModule } from 'ng2-charts';
import { PaymentRecordControlsComponent } from './expenses-modal/payment-record-controls/payment-record-controls.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardControlsComponent,
    ExpensesTableComponent,
    IntervalControlsComponent,
    IntervalOverviewComponent,
    ExpensesGraphComponent,
    PaymentInputComponent,
    ExpensesModalComponent,
    PaymentRecordComponent,
    CompleteIntervalModalComponent,
    EditIntervalModalComponent,
    PaymentRecordControlsComponent
  ],
    imports: [
        CommonModule,
        CustomPipesModule,
        ReactiveFormsModule,
        FormsModule,
        ComponentsModule,
        NgbModule,
        ChartsModule
    ],
  exports: [DashboardControlsComponent]
})
export class DashboardModule { }
