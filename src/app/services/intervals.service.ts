import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Interval } from '../shared';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntervalsService {
  constructor(private http: HttpClient) { }

  create(interval: Interval) {
    return this.http.post<Interval>('/api/intervals', interval);
  }

  finish(interval: Interval) {
    interval.latest = false;

    return this.http.put(`/api/intervals/:${interval.id}`, interval);
  }

  getByYear(year: string) {
    const from = `${year}-01-01`;
    const till = `${year}-12-31`;

    return this.http.get<Interval[]>(`/api/intervals?from=${from}&till=${till}`).pipe(
      map((intervals: Interval[]) => intervals.map(item => new Interval(item)))
    )
  }

  getAccountableYears() {
    return this.http.get<number[]>('/api/intervals/years');
  }

  getAll(): Observable<Interval[]> {
    return this.http.get<Interval[]>('/api/intervals');
  }

  getLatest(): Observable<Interval> {
    return this.http.get<Interval>('/api/intervals/latest').pipe(
      map(item => new Interval(item))
    );
  }

  getPrevious(interval: Interval): Observable<Interval|null> {
    return this.http.get<Interval|null>(`/api/intervals/${interval.id}/previous`).pipe(
      map((item) => item ? new Interval(item) : null)
    );
  }

  update(interval: Interval): Observable<Interval> {
    return this.http.put<Interval>(`/api/intervals/${interval.id}`, interval).pipe(
      map((item) => new Interval(item))
    );
  }
}
