import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import Message from '../message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messages = this.store.select(state => state.messages);

  constructor(private store: Store<{ messages: Message[]}>) { }

  ngOnInit(): void {
  }

}
