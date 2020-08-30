import { createAction, props } from '@ngrx/store';
import UserState from './UserState';

export const receivedUserAuthentication = createAction(
  'received user authentication',
  props<UserState>()
);
