import { Action, createReducer, on } from '@ngrx/store';
import { postMessage } from './messages.actions';
import Message from './message';

const initialState: Message[] = [];

const reducer = createReducer(
  initialState,
  on(postMessage, (messages:Message[], action) => ([
    ...messages, action.message
  ]))
)

export function messagesReducer(state: Message[], action: Action) {
  return reducer(state, action);
}
