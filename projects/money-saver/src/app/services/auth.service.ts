import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: any;

  get User(): any {
    return this.user;
  }

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get('/api/auth/');
  }
}
