import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Expenses } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  constructor(private http: HttpClient) { }

  add(expenses: Expenses) {
    return this.http.post('/api/payments', expenses);
  }
}
