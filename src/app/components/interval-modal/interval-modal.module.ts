import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntervalModalComponent } from './interval-modal.component';
import { NgbDatepicker, NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { IntervalDatepickerComponent } from './interval-datepicker/interval-datepicker.component'



@NgModule({
  declarations: [
    IntervalModalComponent,
    IntervalDatepickerComponent
  ],
  imports: [
    CommonModule,
    NgbDatepicker,
    NgbInputDatepicker
  ]
})
export class IntervalModalModule { }
