import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntervalsComponent } from './intervals.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [IntervalsComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class IntervalsModule { }
