import { Message } from './Message';
import { MessageType } from './MessageType';

export class InfoMessage extends Message {
  constructor(text: string) {
    super(text, MessageType.info);
  }
}
