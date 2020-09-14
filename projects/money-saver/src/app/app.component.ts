import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserService } from './services/user.service';
import UserState from './state/user.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'money-saver';

  displayAuthSpinner = true;
  displayLoginPage = false;

  constructor(
    private users: UserService,
    private store: Store<{ user: UserState }>
  ) {}

  ngOnInit() {
    this.store.select(state => state.user).subscribe(this.updateUserState.bind(this));

    this.users.getAuth();
  }

  private updateUserState(state: UserState) {
    const { user, requestInProgress, initialRequestDone } = state;

    this.displayLoginPage = initialRequestDone && !user;
    this.displayAuthSpinner = requestInProgress && !this.displayAuthSpinner;
  }
}
