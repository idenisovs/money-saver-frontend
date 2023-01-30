import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesPageComponent } from './expenses-page.component';
import { NoIntervalsWarningComponent } from './no-intervals-warning/no-intervals-warning.component';



@NgModule({
  declarations: [
    ExpensesPageComponent,
    NoIntervalsWarningComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ExpensesPageModule { }
