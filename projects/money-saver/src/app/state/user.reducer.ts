import { Action, createReducer, on } from '@ngrx/store';
import { receivedUserAuthentication } from './user.actions';
import User from './User';
import UserState from './UserState';

export const initialState: UserState = {
  user: null
};

const reducer = createReducer(
  initialState,
  on(receivedUserAuthentication, (state: UserState, action) => {
    console.log('receivedUserAuthentication');

    console.log('State:')
    console.log(state);

    console.log('Action:');
    console.log(action);

    return {
      ...state,
      user: action.user
    };
  })
);


export function userReducer(state: UserState, action: Action) {
  return reducer(state, action);
}
