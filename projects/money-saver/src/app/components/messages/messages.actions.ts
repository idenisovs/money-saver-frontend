import { createAction, props } from '@ngrx/store';
import Message from './message';

export const postMessage = createAction(
  'post message',
  props<{ message: Message }>()
)

export const dismissMessage = createAction(
  'dismiss message',
  props<{ message: Message }>()
);
