import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoselectDirective } from './autoselect.directive';

@NgModule({
  declarations: [
    AutoselectDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AutoselectDirective
  ]
})
export class DirectivesModule { }
