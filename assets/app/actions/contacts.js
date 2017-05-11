import axios from 'axios';

export const GET_CONTACTS = 'GET_CONTACTS';
export const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS';
export const SEARCH_CONTACTS = 'SEARCH_CONTACTS';
export const SEARCH_CONTACTS_SUCCESS = 'SEARCH_CONTACTS_SUCCESS';

//const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';

export function getContacts() {

  const request = axios({
    method: 'get',
    url: 'http://localhost:8000/api/contacts/',
    headers: {
      'Authorization': `Token ${sessionStorage.getItem('authToken')}`
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

export function searchContacts(searchKey, isAll) {

    const request = axios({
        method: 'post',
        url: 'http://localhost:8000/api/find/contacts/',
        headers: {
            'Authorization': `Token ${sessionStorage.getItem('authToken')}`
        },
        data: {
            search_key: searchKey
        },
    });

    return {
        type: SEARCH_CONTACTS,
        payload: request
    };
}

export function searchContactsSuccess(contactsList) {
    return {
        type: SEARCH_CONTACTS_SUCCESS,
        payload: contactsList
    };
}
