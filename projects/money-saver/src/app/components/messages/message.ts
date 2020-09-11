import { v4 as uuid } from 'uuid';

export default class Message {
  id = uuid();
  date = new Date();
  text: string;

  constructor(text) {
    this.text = text;
  }
}
