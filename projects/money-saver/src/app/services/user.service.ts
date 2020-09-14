import { Injectable } from '@angular/core';
import User from '../state/User';
import { receivedUserAuthentication, runningUserAuthRequest } from '../state/user.actions';
import { StoredService } from './stored.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends StoredService {
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
}
