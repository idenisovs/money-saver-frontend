import { Injectable } from '@angular/core';
import { MessagesModule } from './messages.module';
import { Message } from './Message';
import { InfoMessage } from './InfoMessage';
import { WarningMessage } from './WarningMessage';
import { ErrorMessage } from './ErrorMessage';

@Injectable({
  providedIn: MessagesModule
})
export class MessagesService {

  messages: Message[] = [];
  constructor() { }

  info(text: string) {
    this.messages.push(new InfoMessage(text));
  }

  warning(text: string) {
    this.messages.push(new WarningMessage(text));
  }

  error(text: string) {
    this.messages.push(new ErrorMessage(text));
  }
}
