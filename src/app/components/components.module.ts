import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerComponent } from './spinner/spinner.component';
import { MessagesModule } from './messages/messages.module';

@NgModule({
  declarations: [
    SpinnerComponent
  ],
  exports: [
    SpinnerComponent,
    MessagesModule
  ],
  imports: [
    CommonModule,
    MessagesModule
  ]
})
export class ComponentsModule { }
