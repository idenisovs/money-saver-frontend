import { Injectable } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

const SEC = 1000;
const MIN = SEC * 60;
const HOUR = MIN * 60;
const DAY = HOUR * 24;

@Injectable({
  providedIn: 'root'
})
export class IntervalHelperService {

  constructor() { }

  getIntervalLength(dateFrom: NgbDate, dateTill: NgbDate): number {
    const from = this.getDateFrom(dateFrom);
    const till = this.getDateFrom(dateTill, true);
    const dT = till.getTime() - from.getTime();
    return Math.ceil(dT / DAY);
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
}
