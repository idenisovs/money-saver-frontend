import { userReducer } from './user.reducer';
import { messagesReducer } from '../components/messages/messages.reducer';
import { intervalsReducer } from './intervals.reducer';

export default {
  user: userReducer,
  messages: messagesReducer,
  intervals: intervalsReducer
};
