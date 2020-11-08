import { IntervalExt } from './interval-ext';

export default interface IntervalsState {
  latest?: IntervalExt;
  list: IntervalExt[];
}
