import { MessageType } from './MessageType';

export class Message {
  time: Date;
  text: string;
  type: MessageType;

  constructor(text: string, type: MessageType) {
    this.time = new Date();
    this.text = text;
    this.type = type;
  }
}
