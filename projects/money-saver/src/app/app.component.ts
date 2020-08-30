import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { select, Store } from '@ngrx/store';
import User from './services/User';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'money-saver';
  user: Observable<User|null>;

  constructor(
    private users: UserService,
    private store: Store<{ user: User|null }>
  ) {}

  ngOnInit() {
    console.log('init')

    this.user = this.store.pipe(select('user'), tap(() => {
      console.log('hello world');
    }));

    console.log('Take auth')
    this.users.getAuth();
  }
}
