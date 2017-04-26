import { combineReducers } from 'redux';
import UserReducer from './reducer_user';
import ContactsReducer from './reducer_contacts';

const rootReducer = combineReducers({
  user: UserReducer,
  contacts: ContactsReducer
});

export default rootReducer;
