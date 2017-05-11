import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS';
export const SEARCH_FRIENDS = 'SEARCH_FRIENDS';
export const SEARCH_FRIENDS_SUCCESS = 'SEARCH_FRIENDS_SUCCESS';
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

export function searchFriends(searchKey, isAll) {

    const request = axios({
        method: 'post',
        url: 'http://localhost:8000/api/find/users/',
        headers: {
            'Authorization': `Token ${sessionStorage.getItem('authToken')}`
        },
        data: {
            search_key: searchKey,
            is_all: isAll
        },
    });

    return {
        type: SEARCH_FRIENDS,
        payload: request
    };
}

export function searchFriendsSuccess(friendsList) {
    return {
        type: SEARCH_FRIENDS_SUCCESS,
        payload: friendsList
    };
}
