import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Summary } from '../shared';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class SummaryService {
	constructor(private http: HttpClient) {}

	getExpensesSummary(intervalId?: number): Observable<Summary|null> {
		const options = {};

		if (typeof intervalId !== 'undefined') {
			options['params'] = {
				interval_id: intervalId
			};
		}

		return this.http.get<Summary>('/api/summary/expenses', options).pipe(
			map((response) => response ? new Summary(response) : null)
		);
	}
}
