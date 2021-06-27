import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Payment } from '../shared';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  constructor(
  	private http: HttpClient,
	private datePipe: DatePipe
  ) { }

  save(payments: Payment[]): Observable<void> {
    return this.http.post<void>('/api/payments', payments);
  }

  getByDate(date: Date): Observable<Payment[]> {
  	const dateQuery = this.datePipe.transform(date, 'YYYY-MM-dd');

  	const options = {
  		params: {
  			date: dateQuery
		}
	};

    return this.http.get<Payment[]>(`/api/payments`, options).pipe(
      map(records => records.map(record => new Payment(record)))
    );
  }
}
