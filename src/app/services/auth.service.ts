import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, of, ReplaySubject, tap } from 'rxjs';

import { Auth, User } from '../shared';
import { MessagesService } from '../components/messages/messages.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private user: Observable<User|null> = this.getUserAuth();
  private user = new ReplaySubject<User|null>(1);
  private isAuthenticated = false;

  get User(): Observable<User|null> {
    return this.user.asObservable();
  }

  get IsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  constructor(
    private http: HttpClient,
    private messages: MessagesService,
    private router: Router
  ) {
    this.getUserAuth()
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

  logout() {
    this.http.get('/api/auth/logout').subscribe(async () => {
      this.isAuthenticated = false;
      this.user.next(null);
      await this.router.navigate(['']);
    });
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
}
