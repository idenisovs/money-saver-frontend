import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import User from '../state/User';
import { receivedUserAuthentication, runningUserAuthRequest } from '../state/user.actions';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { postMessage } from '../components/messages/messages.actions';
import Message from '../components/messages/message';

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
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error(error.message);

          this.store.dispatch(postMessage({
            message: new Message('Something bad happens!')
          }));

          return of(null);
        })
      )
      .subscribe((response: User|null) => {
        this.store.dispatch(receivedUserAuthentication({ user: response }));
      });
  }
}
