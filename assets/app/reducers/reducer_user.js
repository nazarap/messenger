import {
  GET_USER, GET_USER_SUCCESS, LOGIN, LOGIN_SUCCESS
} from '../actions/users';

const INITIAL_STATE = {user: {}, loading: false};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

    case GET_USER:
        return { ...state, loading: true};

    case GET_USER_SUCCESS:
        return { ...state, ...action.payload, loading: false};

    case LOGIN:
        return { ...state, loading: true};

    case LOGIN_SUCCESS:
        sessionStorage.setItem('authToken', action.payload.token);
        return { ...state, user: action.payload.user, loading: false};

    default:
        return state;
  }
}
