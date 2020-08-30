import { createAction, props } from '@ngrx/store';
import User from './User';

export const receivedUserAuthentication = createAction(
  'received user authentication',
  props<{user: User|null }>()
);
