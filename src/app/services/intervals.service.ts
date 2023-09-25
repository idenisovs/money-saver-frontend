import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Interval } from '../shared';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntervalsService {
  constructor(private http: HttpClient) { }

  create(interval: Interval) {
    return this.http.post('/api/intervals', interval);
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
}
