import {
    GET_MESSAGES, GET_MESSAGES_SUCCESS
} from '../actions/messages';

const INITIAL_STATE = {messages: [], loading: false};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

    case GET_MESSAGES:
        return { ...state, loading: true};

    case GET_MESSAGES_SUCCESS:
        return { ...state, ...action.payload, loading: false};

    default:
        return state;
  }
}
