import {
    GET_FRIENDS, GET_FRIENDS_SUCCESS
} from '../actions/friends';

const INITIAL_STATE = {friends: [], loading: false};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

    case GET_FRIENDS:
        return { ...state, loading: true};

    case GET_FRIENDS_SUCCESS:
        return { ...state, ...action.payload, loading: false};

    default:
        return state;
  }
}
