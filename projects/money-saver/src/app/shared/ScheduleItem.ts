export interface ScheduleItemRecord {
  date:	string;
  sum: number;
  spent: number
  residual: number;
  balance: number;
  dailyBalance: number;
  prediction: number;
}

export class ScheduleItem {
  date = new Date();
  sum = 0;
  spent = 0
  residual = 0;
  balance = 0;
  dailyBalance = 0;
  prediction = 0;

  constructor(record: ScheduleItemRecord) {
    if (record) {
      Object.assign(this, record, {
        date: new Date(record.date)
      });
    }

  }
}
