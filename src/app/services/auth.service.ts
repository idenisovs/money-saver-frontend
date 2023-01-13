import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Auth } from "../shared";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getAuth(): Observable<Auth|null> {
    return this.http.get<Auth|null>('/api/auth');
  }
}
