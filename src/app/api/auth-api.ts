import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Credentials, User } from '@shared';

@Injectable({
    providedIn: 'root',
})
export class AuthApi {
    private readonly http = inject(HttpClient);

    getUser(): Observable<User | null> {
        return this.http.get<User | null>('/api/auth');
    }

    login(credentials: Credentials): Observable<User> {
        return this.http.post<User>('/api/auth', credentials);
    }
}
