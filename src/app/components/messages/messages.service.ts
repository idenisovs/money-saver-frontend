import { Injectable } from '@angular/core';

import { ErrorMessage, InfoMessage, Message, WarningMessage } from './message-types';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  list: Message[] = [];

  constructor() { }

  info(text: string) {
    this.list.push(new InfoMessage(text));
  }

  warning(text: string) {
    this.list.push(new WarningMessage(text));
  }

  error(text: string) {
    this.list.push(new ErrorMessage(text));
  }
}
