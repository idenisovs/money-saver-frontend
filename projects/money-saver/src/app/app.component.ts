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
  displayLoginPage = true;
  requestInProgress = true;

  constructor(
    private users: UserService,
    private store: Store<{ user: UserState }>
  ) {}

  ngOnInit() {
    this.store.select(state => state.user).subscribe((userState: UserState) => {
      const { user, requestInProgress } = userState;

      this.displayLoginPage = !user;
      this.requestInProgress = requestInProgress;
    });

    this.users.getAuth();
  }
}
