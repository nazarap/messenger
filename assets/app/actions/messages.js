import axios from 'axios';

export const GET_MESSAGES = 'GET_MESSAGES';
export const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS';

export function getMessages(user_id) {

  const request = axios({
    method: 'get',
    url: `http://localhost:8000/api/messages/${user_id}/`,
    headers: {
      'Authorization': `Token ${sessionStorage.getItem('authToken')}`
    }
  });

  return {
    type: GET_MESSAGES,
    payload: request
  };
}

export function getMessagesSuccess(messagesList) {
  return {
    type: GET_MESSAGES_SUCCESS,
    payload: messagesList
  };
}
