import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../shared';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private readonly http = inject(HttpClient);

  getUser(): Observable<User | null> {
    return this.http.get<User | null>('/api/auth');
  }
}
