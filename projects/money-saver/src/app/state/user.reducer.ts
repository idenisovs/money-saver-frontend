import { Action, createReducer, on } from '@ngrx/store';
import { receivedUserAuthentication } from './user.actions';
import UserState from './UserState';

export const initialState: UserState = {
  user: null
};

const reducer = createReducer(
  initialState,
  on(receivedUserAuthentication, (state: UserState, action) => {
    return {
      ...state,
      user: action.user
    };
  })
);


export function userReducer(state: UserState, action: Action) {
  return reducer(state, action);
}
