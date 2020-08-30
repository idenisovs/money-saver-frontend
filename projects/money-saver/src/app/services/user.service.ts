import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import User from '../state/User';
import { receivedUserAuthentication, runningUserAuthRequest } from '../state/user.actions';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient,
    private store: Store
  ) {
  }

  getAuth() {
    this.store.dispatch(runningUserAuthRequest());

    return this.http.get('/api/auth')
      .subscribe((response: User|null) => {
        this.store.dispatch(receivedUserAuthentication({ user: response }));
      });
  }
}
