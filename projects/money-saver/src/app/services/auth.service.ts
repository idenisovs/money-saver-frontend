import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { receivedUserAuthentication, runningUserAuthRequest } from '../state/user.actions';
import { StoredService } from './stored.service';
import Authentication from './authentication';
import { postMessage } from '../components/messages/messages.actions';
import Message from '../components/messages/message';
import User from '../state/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends StoredService {
  getAuth() {
    this.store.dispatch(runningUserAuthRequest());

    return this.http.get('/api/auth')
      .pipe(
        this.serverErrorHandler()
      )
      .subscribe((user: User|null) => {
        this.store.dispatch(receivedUserAuthentication({ user }));
      });
  }

  authenticate(auth: Authentication) {
    this.store.dispatch(runningUserAuthRequest());

    return this.http.post('/api/auth', auth)
      .pipe(
        catchError((err) => {
          if (err.status !== 401) {
            return this.basicErrorDispatcher(err);
          }

          this.store.dispatch(postMessage({
            message: new Message('Login or password is incorrect!')
          }));

          return of(null);
        })
      )
      .subscribe((user: User|null) => {
        console.log(user);
        this.store.dispatch(receivedUserAuthentication({ user }));
      });
  }
}
