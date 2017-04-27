import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS';
export const OPEN_DIALOG = 'OPEN_DIALOG';

//const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';

export function getFriends() {

  const request = axios({
    method: 'get',
    url: 'http://localhost:8000/api/friends/',
    headers: {
      'Authorization': `Token ${sessionStorage.getItem('authToken')}`
    }
  });

  return {
    type: GET_FRIENDS,
    payload: request
  };
}

export function getFriendsSuccess(friendsList) {
  return {
    type: GET_FRIENDS_SUCCESS,
    payload: friendsList
  };
}

export function openDialog(user) {
  return {
    type: OPEN_DIALOG,
    payload: user
  };
}
