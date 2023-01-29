import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Summary } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  constructor(private http: HttpClient) {}

  get(): Observable<Summary> {
    return this.http.get<Summary>('/api/summary/expenses');
  }
}
