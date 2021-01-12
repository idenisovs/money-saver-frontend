import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Payment, PaymentRecord } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  constructor(private http: HttpClient) { }

  save(payments: Payment[]): Observable<void> {
    return this.http.post<void>('/api/payments', payments.map(item => item.record()));
  }

  update(payments: Payment[]): Observable<void> {
    return this.http.put<void>('/api/payments', payments.map(item => item.record()))
  }

  getByDate(date: Date): Observable<Payment[]> {
    return this.http.get<PaymentRecord[]>(`/api/payments?date=${Payment.date(date)}`).pipe(
      map(records => records.map(record => Payment.build(record)))
    );
  }
}
