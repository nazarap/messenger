import {
    GET_FRIENDS, GET_FRIENDS_SUCCESS, SEARCH_FRIENDS, SEARCH_FRIENDS_SUCCESS, OPEN_DIALOG
} from '../actions/friends';

const INITIAL_STATE = {friends: [], loading: false, openDialogWithUser: {}};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

    case GET_FRIENDS:
        return { ...state, loading: true};

    case GET_FRIENDS_SUCCESS:
        return { ...state, ...action.payload, loading: false};

    case SEARCH_FRIENDS:
        return { ...state, loading: true};

    case SEARCH_FRIENDS_SUCCESS:
        return { ...state, friends: action.payload.users, loading: false};

    case OPEN_DIALOG:
        return { ...state, openDialogWithUser: action.payload};

    default:
        return state;
  }
}
