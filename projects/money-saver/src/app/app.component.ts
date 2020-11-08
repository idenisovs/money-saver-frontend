import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from './services/auth.service';
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

  constructor(
    private router: Router,
    private auth: AuthService,
    private store: Store<{ user: UserState }>
  ) {}

  ngOnInit() {
    this.store.select(state => state.user).subscribe(this.updateUserState.bind(this));

    this.auth.getAuth();
  }

  private async updateUserState(state: UserState) {
    const { user, requestInProgress, initialRequestDone } = state;

    const displayLoginPage = initialRequestDone && !user;

    if (displayLoginPage) {
      await this.router.navigate(['/login']);
    } else {
      await this.router.navigate(['/']);
    }

    this.displayAuthSpinner = requestInProgress && !displayLoginPage
  }
}
