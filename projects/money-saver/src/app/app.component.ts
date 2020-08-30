import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import User from './state/User';
import UserState from './state/UserState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'money-saver';
  user: Observable<User>;

  constructor(
    private users: UserService,
    private store: Store<{ user: UserState }>
  ) {}

  ngOnInit() {
    console.log('init')

    this.user = this.store.select((state => state.user.user)).pipe(tap(() => {
      console.log('xxxxxx');
    }));

    console.log('Take auth')
    this.users.getAuth();
  }
}
