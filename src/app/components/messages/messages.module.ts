import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';

import { MessagesComponent } from './messages.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    MessagesComponent,
    MessageComponent
  ],
  exports: [
    MessagesComponent
  ],
  imports: [
    CommonModule,
    NgbToast
  ]
})
export class MessagesModule { }
