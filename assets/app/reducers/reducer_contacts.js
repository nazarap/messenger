import {
  GET_CONTACTS, GET_CONTACTS_SUCCESS
} from '../actions/contacts';

const INITIAL_STATE = {contacts: [], loading: false};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

    case GET_CONTACTS:
        return { ...state, loading: true};

    case GET_CONTACTS_SUCCESS:
        return { ...state, ...action.payload, loading: false};

    default:
        return state;
  }
}
