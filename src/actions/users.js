import axios from 'axios';
import { GET_USERS } from './const'

export function getUsers(users) {
  return {
    type: GET_USERS,
    users: users
  }
}

export function fetchUsers() {
  return dispatch => {
    return axios.get('users')
    .then(response => {
      dispatch(getUsers(response.data));
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
      }
    });
  }
}
