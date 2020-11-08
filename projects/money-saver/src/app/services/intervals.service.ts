import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { StoredService } from './stored.service';
import Interval from '../state/interval';
import { updateIntervalsList, updateLatestInterval } from '../state/intervals.actions';
import { IntervalExt } from '../state/interval-ext';

@Injectable({
  providedIn: 'root'
})
export class IntervalsService extends StoredService {
  get(): Observable<Interval> {
    return this.http.get('/api/intervals').pipe(
      this.serverErrorHandler(),
      tap((response: Interval) => {
        this.store.dispatch(updateLatestInterval({
          interval: new IntervalExt(response)
        }));
      })
    );
  }

  getLatest(): Observable<Interval[]> {
    return this.http.get('/api/intervals').pipe(
      this.serverErrorHandler(),
      tap((response: Interval[]) => {
        this.store.dispatch(updateIntervalsList({
          intervals: response.map((interval) => new IntervalExt(interval))
        }));
      })
    );
  }
}
