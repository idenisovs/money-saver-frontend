import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserService } from './services/user.service';
import UserState from './state/user.state';
import { Router } from '@angular/router';

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
    private store: Store<{ user: UserState }>,
    private router: Router
  ) {}

  ngOnInit() {
    this.store.select(state => state.user).subscribe(this.updateUserState.bind(this));

    this.users.getAuth();
  }

  private async updateUserState(state: UserState) {
    const { user, requestInProgress, initialRequestDone } = state;

    this.displayLoginPage = initialRequestDone && !user;
    this.displayAuthSpinner = requestInProgress && !this.displayLoginPage

    if (this.displayLoginPage) {
      await this.router.navigate(['/login']);
    }
  }
}
