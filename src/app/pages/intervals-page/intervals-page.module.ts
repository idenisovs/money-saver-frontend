import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntervalsPageComponent } from './intervals-page.component';
import { BreadcrumbModule } from '../../components/breadcrumb/breadcrumb.module';
import { ComponentsModule } from '../../components/components.module';
import { IntervalCardComponent } from './interval-card/interval-card.component';

@NgModule({
  declarations: [
    IntervalsPageComponent,
    IntervalCardComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    ComponentsModule
  ]
})
export class IntervalsPageModule { }
