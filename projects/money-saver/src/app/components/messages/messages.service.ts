import { Injectable } from '@angular/core';
import Message from './Message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messages: Message[] = [];

  constructor() { }

  post(message: Message) {
    this.messages.push(message);
  }

  remove(message: Message) {
    const idx = this.messages.indexOf(message);

    this.messages.splice(idx, 1);
  }
}
