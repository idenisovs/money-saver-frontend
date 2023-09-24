import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectIntervalComponent } from './select-interval.component';
import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    SelectIntervalComponent
  ],
  exports: [
    SelectIntervalComponent
  ],
  imports: [
    CommonModule,
    NgbDatepicker
  ]
})
export class SelectIntervalModule { }
