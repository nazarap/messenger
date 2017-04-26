import axios from 'axios';

export const GET_CONTACTS = 'GET_CONTACTS';
export const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS';

//const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';

export function getContacts() {

  const request = axios({
    method: 'get',
    url: 'http://localhost:8000/api/contacts/',
    headers: {
      'Authorization': `Token 2030bf1847edba33f7f7d4efe6642fd345a7f0f8`
    }
  });

  return {
    type: GET_CONTACTS,
    payload: request
  };
}

export function getContactsSuccess(contactsList) {
  return {
    type: GET_CONTACTS_SUCCESS,
    payload: contactsList
  };
}
