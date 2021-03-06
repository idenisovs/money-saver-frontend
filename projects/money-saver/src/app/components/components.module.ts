import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { DateRangeComponent } from './date-range/date-range.component';
import { DateRangeModalComponent } from './date-range-modal/date-range-modal.component';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    SpinnerComponent,
    DateRangeComponent,
    DateRangeModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    BreadcrumbComponent,
    SpinnerComponent,
    DateRangeComponent
  ]
})
export class ComponentsModule { }
