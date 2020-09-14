import { Action, createReducer, on } from '@ngrx/store';
import { receivedUserAuthentication, runningUserAuthRequest } from './user.actions';
import UserState from './user.state';

const initialState: UserState = {
  user: null,
  requestInProgress: false,
  initialRequestDone: false
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
      initialRequestDone: true,
      user: action.user
    };
  })
);

export function userReducer(state: UserState, action: Action) {
  return reducer(state, action);
}
