import { userReducer } from './user.reducer';
import { messagesReducer } from '../components/messages/messages.reducer';

export default {
  user: userReducer,
  messages: messagesReducer
};
