import { Message } from './Message';
import { MessageType } from './MessageType';

export class ErrorMessage extends Message {
  constructor(text: string) {
    super(text, MessageType.error);
  }
}
