import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

import { Summary } from '../shared';
import { SummaryService } from '../services/summary.service';

@Injectable({
  providedIn: 'root'
})
export class SummaryResolver implements Resolve<Summary> {
  constructor(private summary: SummaryService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Summary> {
    return this.summary.get();
  }
}
