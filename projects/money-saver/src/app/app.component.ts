import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserService } from './services/user.service';
import UserState from './state/UserState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'money-saver';
  user: UserState;

  constructor(
    private users: UserService,
    private store: Store<{ user: UserState }>
  ) {}

  ngOnInit() {
    this.store.select(state => state.user).subscribe((user: UserState) => {
      this.user = user;
    });

    this.users.getAuth();
  }
}
