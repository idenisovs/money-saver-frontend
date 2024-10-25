import { Injectable } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

import { daysDiff } from '../../../shared/utils';
import { DateTime } from 'luxon';

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
    const till = this.getDateFrom(dateTill);

    return daysDiff(from, till);
  }

  getDuration(dateFrom: string, dateTill: string): number {
    return daysDiff(dateFrom, dateTill);
  }

  getDateFrom(date: NgbDate|null): string {
    if (!date) {
      return DateTime.local().toISODate();
    }

    return DateTime.fromObject({
      year: date.year,
      month: date.month,
      day: date.day
    }).toISODate() as string;
  }

  async getModalResult<T>(modalResultPromise: Promise<any>): Promise<T | null> {
    try {
      return await modalResultPromise;
    } catch (e) {
      return null
    }
  }
}
