import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntervalsComponent } from './intervals.component';
import { ComponentsModule } from '../../components/components.module';
import { IntervalItemComponent } from './interval-item/interval-item.component';
import { CustomPipesModule } from '../../pipes/custom-pipes.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [IntervalsComponent, IntervalItemComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    CustomPipesModule,
    RouterModule
  ]
})
export class IntervalsModule { }
