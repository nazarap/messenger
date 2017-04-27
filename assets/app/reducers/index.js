import { combineReducers } from 'redux';
import UserReducer from './reducer_user';
import ContactsReducer from './reducer_contacts';
import FriendsReducer from './reducer_friends';
import MessagesReducer from './reducer_messages';

const rootReducer = combineReducers({
  user: UserReducer,
  contacts: ContactsReducer,
  messages: MessagesReducer,
  friends: FriendsReducer
});

export default rootReducer;
