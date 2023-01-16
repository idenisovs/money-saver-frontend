import { Injectable } from '@angular/core';

import { Message } from './Message';
import { InfoMessage } from './InfoMessage';
import { WarningMessage } from './WarningMessage';
import { ErrorMessage } from './ErrorMessage';

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
