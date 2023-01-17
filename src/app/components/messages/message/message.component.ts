import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Message } from '../message-types';
import { MessageType } from '../message-types/MessageType';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  @Input()
  message!: Message;

  @Output()
  close = new EventEmitter<Message>();

  getStyle() {
    switch (this.message.type) {
      case MessageType.info:
        return 'bg-success text-light';
      case MessageType.warning:
        return 'bg-warning text-light';
      case MessageType.error:
        return 'bg-danger text-light';
      default:
        return '';
    }
  }
}
