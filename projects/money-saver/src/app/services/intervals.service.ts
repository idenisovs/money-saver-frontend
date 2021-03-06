import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Interval } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class IntervalsService {

  constructor(private http: HttpClient) { }

  getYears(): Observable<number[]> {
    return this.http.get<number[]>('/api/intervals/years');
  }

  getByYear(year: number): Observable<Interval[]> {
    const query = `/api/intervals?from=${year}-01-01&till=${year}-12-31`;

    return this.http.get<Interval[]>(query).pipe(
      map((intervals: Interval[]) => intervals.map((record) => new Interval(record)))
    );
  }

  create(interval: Interval): Observable<void> {
    return this.http.post<void>('/api/intervals', interval);
  }

  update(interval: Interval): Observable<void> {
    return this.http.put<void>(`/api/intervals/${interval.id}`, interval);
  }
}
