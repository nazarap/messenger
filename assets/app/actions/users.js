import axios from 'axios';

export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';

//const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';

export function getUser() {

  const request = axios({
    method: 'post',
    url: `http://localhost:8000/api/user/data/`,
    headers: {
      'Authorization': `Token 2030bf1847edba33f7f7d4efe6642fd345a7f0f8`
    }
  });

  return {
    type: GET_USER,
    payload: request
  };
}

export function getUserSuccess(currentUser) {
  return {
    type: GET_USER_SUCCESS,
    payload: currentUser
  };
}
