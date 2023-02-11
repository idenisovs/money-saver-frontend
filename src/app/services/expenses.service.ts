import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DailyExpensesOverview, Payment } from '../shared';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  constructor(private http: HttpClient) { }

  add(expenses: Payment) {
    return this.http.post('/api/payments', expenses);
  }

  getByDate(dailyExpensesOverview: DailyExpensesOverview) {
    return this.http.get<Payment[]>(`/api/payments?date=${dailyExpensesOverview.getShortDate()}`)
      .pipe(
        map((expenses: Payment[]) => {
          return expenses.map(payment => new Payment(payment))
        })
      )
  }
}
