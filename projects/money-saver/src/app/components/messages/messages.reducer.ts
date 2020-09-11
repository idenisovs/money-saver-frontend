import { Action, createReducer, on } from '@ngrx/store';
import { dismissMessage, postMessage } from './messages.actions';
import Message from './message';

const initialState: Message[] = [];

const reducer = createReducer(
  initialState,

  on(postMessage, (messages:Message[], action) => ([
    ...messages, action.message
  ])),

  on(dismissMessage, (messages: Message[], action) => {
    return messages.filter((msg) => msg.id !== action.message.id);
  })
)

export function messagesReducer(state: Message[], action: Action) {
  return reducer(state, action);
}
