import { User } from './User';

export interface IntervalRecord {
  id: number;
  start: number;
  end: number;
  sum: number;
  latest: number;
  user: User;
}

export class Interval {
  id: number;
  start: Date;
  end: Date;
  sum: number;
  latest: boolean;
  user: User;

  constructor(data: IntervalRecord) {
    this.id = data.id;
    this.start = new Date(data.start);
    this.end = new Date(data.end);
    this.sum = data.sum;
    this.latest = data.latest === 1;
    this.user = data.user;
  }
}
