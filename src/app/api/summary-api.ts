import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Summary } from '@shared';

@Injectable({
    providedIn: 'root',
})
export class SummaryApi {
    private readonly http = inject(HttpClient);

    getExpensesSummary(intervalId?: number): Observable<Summary> {
        const url = intervalId ? `/api/summary/expenses/${intervalId}` : '/api/summary/expenses';
        return this.http.get<Summary>(url);
    }
}
