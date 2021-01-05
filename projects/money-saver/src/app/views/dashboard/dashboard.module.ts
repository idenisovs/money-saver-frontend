import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardControlsComponent } from './dashboard-controls/dashboard-controls.component';
import { ExpensesTableComponent } from './expenses-table/expenses-table.component';
import { IntervalControlsComponent } from './interval-controls/interval-controls.component';
import { IntervalOverviewComponent } from './interval-overview/interval-overview.component';
import { ExpensesGraphComponent } from './expenses-graph/expenses-graph.component';

@NgModule({
  declarations: [DashboardComponent, DashboardControlsComponent, ExpensesTableComponent, IntervalControlsComponent, IntervalOverviewComponent, ExpensesGraphComponent],
  imports: [
    CommonModule
  ],
  exports: [DashboardControlsComponent]
})
export class DashboardModule { }
