import { User } from './User';

export interface IntervalRecord {
  id?: number;
  start: number;
  end: number;
  sum: number;
  latest?: number|boolean;
  single: boolean;
  user?: User;
}

export class Interval {
  id: number;
  start: Date;
  end: Date;
  sum: number;
  latest: boolean;
  single: boolean;
  user: User;

  constructor(data: IntervalRecord) {
    this.id = data.id;
    this.start = new Date(data.start);
    this.end = new Date(data.end);
    this.sum = data.sum;
    this.latest = !!data.latest;
    this.single = data.single;
    this.user = data.user;
  }

  toRecord(): IntervalRecord {
    return {
      id: this.id,
      start: this.start.getTime(),
      end: this.end.getTime(),
      sum: this.sum,
      latest: this.latest ? 1 : 0,
      single: this.single
    }
  }
}
