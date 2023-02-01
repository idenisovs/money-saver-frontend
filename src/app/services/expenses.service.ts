import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Day, Payment } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  constructor(private http: HttpClient) { }

  add(expenses: Payment) {
    return this.http.post('/api/payments', expenses);
  }

  getByDate(dailyExpensesOverview: Day) {
    return this.http.get<Payment[]>(`/api/payments?date=${dailyExpensesOverview.getShortDate()}`)
  }
}
