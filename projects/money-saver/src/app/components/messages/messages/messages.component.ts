import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import Message from '../message';
import { dismissMessage } from '../messages.actions';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages = this.store.select(state => state.messages);

  constructor(
    private store: Store<{ messages: Message[]}>
  ) { }

  ngOnInit(): void {
  }

  dismiss(message: Message) {
    this.store.dispatch(dismissMessage({
      message
    }));
  }


}
