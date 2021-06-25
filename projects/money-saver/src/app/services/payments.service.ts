import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Payment } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  constructor(private http: HttpClient) { }

  save(payments: Payment[]): Observable<void> {
    return this.http.post<void>('/api/payments', payments);
  }

  update(payments: Payment[]): Observable<void> {
    return this.http.put<void>('/api/payments', payments)
  }

  getByDate(date: Date): Observable<Payment[]> {
  	const queryStr = date.toISOString().split('T')[0];

  	const options = {
  		params: {
  			date: queryStr
		}
	};

    return this.http.get<Payment[]>(`/api/payments`, options).pipe(
      map(records => records.map(record => new Payment(record)))
    );
  }
}
