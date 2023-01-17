import { Injectable } from '@angular/core';

import { ErrorMessage, InfoMessage, Message, WarningMessage } from './message-types';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  public list: Message[] = [];

  constructor() { }

  public info(text: string) {
    this.list.push(new InfoMessage(text));
  }

  public warning(text: string) {
    this.list.push(new WarningMessage(text));
  }

  public error(text: string) {
    this.list.push(new ErrorMessage(text));
  }

  public remove(message: Message) {
    const idx = this.list.indexOf(message);

    this.list.splice(idx, 1);
  }
}
