import {
  GET_USER, GET_USER_SUCCESS
} from '../actions/users';

const INITIAL_STATE = {user: {}, loading: false};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

    case GET_USER:
        return { ...state, loading: true};

    case GET_USER_SUCCESS:
        return { ...state, ...action.payload, loading: false};

    default:
        return state;
  }
}
