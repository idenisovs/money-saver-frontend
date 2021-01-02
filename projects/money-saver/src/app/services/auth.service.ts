import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Auth, User } from '../shared';
import { catchError, tap } from 'rxjs/operators';
import { MessagesService } from '../components/messages/messages.service';
import Message from '../components/messages/Message';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public logout = new EventEmitter<void>();

  private user: User;

  get User(): User {
    return this.user;
  }

  constructor(
    private http: HttpClient,
    private messages: MessagesService
  ) { }

  get(): Observable<User|null> {
    return this.http.get<User|null>('/api/auth/');
  }

  login(auth: Auth): Observable<User> {
    return this.http.post<User>('/api/auth', auth).pipe(
      tap((user: User) => {
        this.user = user;
      }),

      catchError((err) => {
        const text = err.status === 401 ? 'Login or password is incorrect!' : 'Something bad happened on server!';

        this.messages.post(new Message(text));
        this.user = null;

        return of(null);
      })
    )
  }
}
