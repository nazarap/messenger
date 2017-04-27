import axios from 'axios';

export const GET_MESSAGES = 'GET_MESSAGES';
export const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS';
export const SEND_MESSAGE = 'SEND_MESSAGE';

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
  setTimeout(function(){
      var element = document.getElementsByClassName("message-list")[0];
      element.scrollTop = element.scrollHeight - element.clientHeight;
  }, 0);
  return {
    type: GET_MESSAGES_SUCCESS,
    payload: messagesList
  };
}

export function sendMessage(user_id, text) {

  const request = axios({
    method: 'post',
    url: `http://localhost:8000/api/send/message/`,
    headers: {
      'Authorization': `Token ${sessionStorage.getItem('authToken')}`
    },
    data: {
        user_id: user_id,
        text: text
    },
  });

  return {
    type: SEND_MESSAGE,
    payload: request
  };
}
