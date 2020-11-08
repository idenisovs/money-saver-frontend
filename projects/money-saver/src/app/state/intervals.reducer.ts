import { Action, createReducer } from '@ngrx/store';
import IntervalsState from './intervals.state';

const initialState: IntervalsState = {
  list: []
};

const reducer = createReducer(
  initialState
);

export function intervalsReducer(state: IntervalsState, action: Action) {
  return reducer(state, action);
}
