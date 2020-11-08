import Interval from './interval';

export class IntervalExt {
  id = -1;
  start = new Date();
  end = new Date();
  sum = 0;
  latest = false;

  constructor(interval?: Interval) {
    if (interval) {
      this.id = interval.id;
      this.start = new Date(interval.start);
      this.end = new Date(interval.end);
      this.sum = interval.sum;
      this.latest = interval.latest === 1;
    }
  }
}
