import { Totals } from './Totals';
import { ScheduleItem, ScheduleItemRecord } from './ScheduleItem';
import { Interval, IntervalRecord } from './Interval';
import { Spending, SpendingRecord } from './Spending';

export interface SummaryRecord {
  interval: IntervalRecord;
  schedule: ScheduleItemRecord[];
  spendings: SpendingRecord[];
  totals: Totals;
}

export class Summary {
  interval: Interval;
  schedule: ScheduleItem[];
  spendings: Spending[];
  totals: Totals;

  constructor(record: SummaryRecord) {
    this.interval = new Interval(record.interval);
    this.schedule = record.schedule.map((item) => new ScheduleItem(item));
    this.spendings = record.spendings.map((item) => new Spending(item));
    this.totals = record.totals;
  }
}
