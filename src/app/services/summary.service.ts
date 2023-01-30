import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Summary } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  constructor(private http: HttpClient) {}

  get(): Observable<Summary|null> {
    return this.http.get<Summary|null>('/api/summary/expenses').pipe(
      map((response) => {
        if (response) {
          return new Summary(response);
        }

        return null;
      })
    );
  }
}
