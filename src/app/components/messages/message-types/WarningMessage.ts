import { Message } from './Message';
import { MessageType } from './MessageType';

export class WarningMessage extends Message {
  constructor(text: string) {
    super(text, MessageType.warning);
  }
}
