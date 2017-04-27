import { combineReducers } from 'redux';
import UserReducer from './reducer_user';
import ContactsReducer from './reducer_contacts';
import FriendsReducer from './reducer_friends';

const rootReducer = combineReducers({
  user: UserReducer,
  contacts: ContactsReducer,
  friends: FriendsReducer
});

export default rootReducer;
