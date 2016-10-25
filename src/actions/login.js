import axios from 'axios';
import { REJECT_LOGIN, RECEIVE_LOGIN } from './const'

export function rejectLogin(error) {
  return {
    type: REJECT_LOGIN,
    error: error
  }
}

export function receiveLogin(user) {
  return {
    type: RECEIVE_LOGIN,
    login: user
  }
}

export function loginUser(email, password) {
  return dispatch => {
    return axios.post('login', {
      email: email,
      password: password
    })
    .then(response => {
      console.log(response.data);
      localStorage.setItem('token', response.data.password_digest)
      dispatch(receiveLogin(response.data));
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        dispatch(rejectLogin(error.response.data.errors));
      }
    });
  }
}

export function currentUser() {
  return dispatch => {
    return axios.get('current_user')
    .then(response => {
      dispatch(receiveLogin(response.data));
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        dispatch(rejectLogin(error.response.data.errors));
      }
    });
  }
}
