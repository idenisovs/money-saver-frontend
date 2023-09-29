import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Summary } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  constructor(private http: HttpClient) {}

  get(intervalId?: number): Observable<Summary|null> {
    const endpoint = ['/api/summary/expenses', intervalId].join('/');

    console.log('endpoint =', endpoint);

    return this.http.get<Summary|null>(endpoint).pipe(
      map((response) => {
        if (response) {
          return new Summary(response);
        }

        return null;
      })
    );
  }
}
