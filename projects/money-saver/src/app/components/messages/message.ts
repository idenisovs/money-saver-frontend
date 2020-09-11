export default class Message {
  date = new Date();
  text: string;

  constructor(text) {
    this.text = text;
  }
}
