import { Injectable } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

import { daysDiff } from '../../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class IntervalHelperService {

  constructor() { }

  getIntervalLength(dateFrom: NgbDate|null, dateTill: NgbDate|null): number {
    if (!dateFrom || !dateTill) {
      return 0;
    }

    const from = this.getDateFrom(dateFrom);
    const till = this.getDateFrom(dateTill, true);

    return daysDiff(from, till);
  }

  getDuration(dateFrom: Date, dateTill: Date): number {
    return daysDiff(dateFrom, dateTill);
  }

  getDateFrom(date: NgbDate|null, isEndOfDay = false) {
    if (!date) {
      return new Date();
    }

    const result = new Date(date.year, date.month - 1, date.day);

    if (isEndOfDay) {
      result.setHours(23, 59, 59);
    } else {
      result.setHours(0, 0, 0);
    }

    return result;
  }

  async getModalResult<T>(modalResultPromise: Promise<any>): Promise<T | null> {
    try {
      return await modalResultPromise;
    } catch (e) {
      return null
    }
  }
}
