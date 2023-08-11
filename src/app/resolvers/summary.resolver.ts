import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Summary } from '../shared';
import { SummaryService } from '../services/summary.service';

@Injectable({
  providedIn: 'root'
})
export class SummaryResolver  {
  constructor(private summary: SummaryService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Summary|null> {
    return this.summary.get();
  }
}
