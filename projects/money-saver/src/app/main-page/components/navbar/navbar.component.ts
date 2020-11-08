import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import UserState from '../../../state/user.state';
import User from '../../../state/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: User;
  collapsed = true;

  constructor(
    private store: Store<{ user: UserState }>
  ) { }

  ngOnInit(): void {
    this.store.select(state => state.user).subscribe((state: UserState) => {
      this.user = state.user;
    });
  }
}
