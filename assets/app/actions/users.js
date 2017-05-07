import axios from 'axios';

export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';

//const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';

export function getUser() {
  const request = axios({
    method: 'post',
    url: `http://localhost:8000/api/user/data/`,
    headers: {
      'Authorization': `Token ${sessionStorage.getItem('authToken')}`
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

export function login(auth) {

  const request = axios({
    method: 'post',
    url: `http://localhost:8000/api/user/login/`,
    data: {
        login: auth.login,
        password: auth.password
    },
  });

  return {
    type: LOGIN ,
    payload: request
  };
}

export function loginSuccess(currentUser) {
  return {
    type: LOGIN_SUCCESS,
    payload: currentUser
  };
}

export function loginError(errorMessage) {
  return {
    type: LOGIN_ERROR,
    payload: errorMessage
  };
}

export function createUser(user) {

  const request = axios({
    method: 'post',
    url: 'http://localhost:8000/api/user/create/',
    data: {
        first_name: user.first_name.value,
        last_name: user.last_name.value,
        img: user.img,
        vk_token: user.vk_token,
        vk_id: user.vk_id,
        login: user.login.value,
        password: user.password.value
    },
  });

  return {
    type: CREATE_USER,
    payload: request
  };
}

export function createUserSuccess(currentUser) {
  return {
    type: CREATE_USER_SUCCESS,
    payload: currentUser
  };
}
