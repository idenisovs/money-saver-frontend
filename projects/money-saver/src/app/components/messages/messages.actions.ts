import { createAction, props } from '@ngrx/store';
import Message from './message';

export const postMessage = createAction(
  'post message',
  props<{ message: Message }>()
)
