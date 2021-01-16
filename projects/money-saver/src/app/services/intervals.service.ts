import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Interval, IntervalRecord, Summary, SummaryRecord  } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class IntervalsService {

  constructor(private http: HttpClient) { }

  getLatest(): Observable<Interval> {
    return this.http.get<IntervalRecord>('/api/intervals/latest').pipe(
      map((interval: IntervalRecord) => new Interval(interval))
    );
  }

  getLatestSummary(): Observable<Summary> {
    return this.http.get<SummaryRecord>('/api/intervals/latest/summary').pipe(
      map((summary) => new Summary(summary))
    );
  }

  getById(id: number): Observable<Summary> {
    return this.http.get<SummaryRecord>(`/api/summary/payments?intervalid=${id}`).pipe(
      map((summary) => new Summary(summary))
    );
  }

  getYears(): Observable<number[]> {
    return this.http.get<number[]>('/api/intervals/years');
  }

  getByYear(year: number): Observable<Interval[]> {
    const query = `/api/intervals?from=${year}-01-01&till=${year}-12-31`;

    return this.http.get<IntervalRecord[]>(query).pipe(
      map((intervals: IntervalRecord[]) => intervals.map((record) => new Interval(record)))
    );
  }

  create(interval: Interval): Observable<void> {
    return this.http.post<void>('/api/intervals', interval);
  }

  update(interval: Interval): Observable<void> {
    return this.http.put<void>(`/api/intervals/${interval.id}`, interval.toRecord());
  }
}
