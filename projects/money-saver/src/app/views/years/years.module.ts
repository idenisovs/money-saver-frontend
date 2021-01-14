import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YearsComponent } from './years.component';
import { ComponentsModule } from '../../components/components.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [YearsComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule
  ]
})
export class YearsModule { }
