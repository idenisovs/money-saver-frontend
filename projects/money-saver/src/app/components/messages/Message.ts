export default class Message {
  time = new Date();
  text: string;

  constructor(text: string) {
    this.text = text;
  }
}
