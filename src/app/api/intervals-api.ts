import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Interval, IntervalSummary } from '@shared';


@Injectable({
    providedIn: 'root',
})
export class IntervalsApi {
    private readonly http = inject(HttpClient);

    getById(id: number): Observable<Interval> {
        return this.http.get<Interval>(`/api/intervals/${id}`);
    }

    getLatest(): Observable<Interval | null> {
        return this.http.get<Interval | null>('/api/intervals/latest');
    }

    getPrevious(id: number): Observable<Interval | null> {
        return this.http.get<Interval | null>(`/api/intervals/${id}/previous`);
    }

    getYears(): Observable<string[]> {
        return this.http.get<string[]>('/api/intervals/years');
    }

    getYearlyIntervals(year: string): Observable<IntervalSummary[]> {
        return this.http.get<IntervalSummary[]>(`/api/intervals/years/${year}`);
    }

    create(interval: Interval): Observable<Interval> {
        return this.http.post<Interval>('/api/intervals', interval);
    }

    update(interval: Interval): Observable<void> {
        return this.http.put<void>(`/api/intervals/${interval.id}`, interval);
    }

    finish(interval: Interval): Observable<void> {
        return this.http.post<void>(`/api/intervals/${interval.id}/finish`, interval);
    }
}
