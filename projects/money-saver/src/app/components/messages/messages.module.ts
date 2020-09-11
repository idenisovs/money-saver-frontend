import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [MessagesComponent],
  exports: [
    MessagesComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ]
})
export class MessagesModule { }
