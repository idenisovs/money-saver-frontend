import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';

import { Auth, User } from '../shared';
import { MessagesService } from '../components/messages/messages.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User|null = null;

  get User(): User|null {
    return this.user;
  }

  get IsAuthenticated(): boolean {
    return !!this.user;
  }

  constructor(
    private http: HttpClient,
    private messages: MessagesService
  ) { }

  getUserAuth(): Observable<User|null> {
    return this.http.get<User|null>('/api/auth').pipe(
      tap((response: User|null) => {
        this.user = response;
      })
    )
  }

  authenticate(credentials: Auth): Observable<User|null> {
    return this.http.post<User>('/api/auth', credentials).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.messages.error('Login or password is incorrect!');
        } else {
          this.messages.error('Something bad happened!');
        }

        return of(null);
      }),
      tap((response) => {
        if (response) {
          this.user = response;
        }
      })
    )
  }
}
