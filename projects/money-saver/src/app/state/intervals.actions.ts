import { createAction, props } from '@ngrx/store';
import { IntervalExt } from './interval-ext';

export const updateLatestInterval = createAction(
  'update latest interval',
  props<{ interval: IntervalExt }>()
);

export const updateIntervalsList = createAction(
  'update intervals list',
  props<{ intervals: IntervalExt[] }>()
)
