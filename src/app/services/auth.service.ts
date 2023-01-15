import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Auth } from "../shared";
import { Observable, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Auth|null = null;

  get User(): Auth|null {
    return this.user;
  }

  get IsAuthenticated(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) { }

  getAuth(): Observable<Auth|null> {
    return this.http.get<Auth|null>('/api/auth').pipe(
      tap((response: Auth|null) => {
        this.user = response;
      })
    )
  }
}
