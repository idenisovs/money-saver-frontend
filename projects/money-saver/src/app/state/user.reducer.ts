import { Action, createReducer, on } from '@ngrx/store';
import { receivedUserAuthentication, runningUserAuthRequest } from './user.actions';
import UserState from './UserState';

const initialState: UserState = {
  user: null,
  requestInProgress: false
};

const reducer = createReducer(
  initialState,
  on(runningUserAuthRequest, (state: UserState) => ({
    ...state,
    requestInProgress: true
  })),
  on(receivedUserAuthentication, (state: UserState, action) => {
    return {
      requestInProgress: false,
      user: action.user
    };
  })
);

export function userReducer(state: UserState, action: Action) {
  return reducer(state, action);
}
