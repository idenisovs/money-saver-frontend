import { Component, OnInit } from '@angular/core';
import { MessagesService } from './messages.service';
import Message from './Message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  get Messages(): Message[] {
    return this.messages.messages;
  }

  constructor(private messages: MessagesService) { }

  ngOnInit(): void {
  }

  close(message: Message) {
    this.messages.remove(message);
  }

}
