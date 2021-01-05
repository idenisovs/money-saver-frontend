export interface SpendingRecord {
  date: string;
  sum: number;
}

export class Spending {
  date = new Date();
  sum = 0;

  constructor(record: SpendingRecord) {
    if (record) {
      this.date = new Date(record.date);
      this.sum = record.sum;
    }
  }
}
