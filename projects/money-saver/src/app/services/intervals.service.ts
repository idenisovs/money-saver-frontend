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

  update(interval: Interval): Observable<void> {
    return this.http.put<void>(`/api/intervals/${interval.id}`, interval.toRecord());
  }
}
