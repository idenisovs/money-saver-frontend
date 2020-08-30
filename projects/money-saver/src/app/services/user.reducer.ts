import { Action, createReducer, on, State } from '@ngrx/store';
import { receivedUserAuthentication } from './user.actions';
import User from './User';

export const initialState: User|null = null;

const reducer = createReducer(
  initialState,
  on(receivedUserAuthentication, (state: User|null, action) => {
    console.log('receivedUserAuthentication');

    console.log('State:')
    console.log(state);

    console.log('Action:');
    console.log(action);

    return action.user;
  })
);


export function userReducer(state: User|null, action: Action) {
  return reducer(state, action);
}
