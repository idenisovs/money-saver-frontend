import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, of, ReplaySubject, tap } from 'rxjs';

import { Auth, User } from '../shared';
import { MessagesService } from '../components/messages/messages.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private user: Observable<User|null> = this.getUserAuth();
  private user = new ReplaySubject<User|null>();
  private isAuthenticated = false;

  get User(): Observable<User|null> {
    return this.user.asObservable();
  }

  get IsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  constructor(
    private http: HttpClient,
    private messages: MessagesService
  ) {
    this.getUserAuth()
  }

  private getUserAuth() {
    this.http.get<User|null>('/api/auth').pipe(
      tap((response) => {
        this.isAuthenticated = !!response;
      })
    ).subscribe((response: User|null) => {
      this.user.next(response);
    });
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
        this.user.next(response);
        this.isAuthenticated = !!response;
      })
    )
  }
}
