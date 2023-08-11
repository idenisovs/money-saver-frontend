import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Interval } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class IntervalsService {
  constructor(private http: HttpClient) { }

  finish(interval: Interval) {
    interval.latest = false;

    return this.http.put(`/api/intervals/:${interval.id}`, interval);
  }
}
