import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getAuth() {
    this.http.get('/api/auth').subscribe((response: any) => {
      console.log(response);
    });
  }
}
