import { RECEIVE_LOGIN, REJECT_LOGIN } from '../actions/const';

export function login(state = {
  loggedIn: localStorage.getItem('token') ? true : false,
  valid: true,
  token: null,
  name: null,
  email: null,
  error: null
}, action) {
  switch (action.type) {
    case REJECT_LOGIN:
      return Object.assign({}, state, {
        loggedIn: false,
        valid: false,
        token: null,
        name: null,
        email: null,
        error: action.error
      });
    case RECEIVE_LOGIN:
      return Object.assign({}, state, {
        loggedIn: true,
        valid: true,
        token: action.login.password_digest,
        name: action.login.name,
        email: action.login.email,
        error: null
      });
    default:
      return state;
  }
}
