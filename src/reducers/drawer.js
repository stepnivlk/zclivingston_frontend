import { TOGGLE_DRAWER } from '../actions/const';

export function drawer(state = false, action) {
  if (action.type === TOGGLE_DRAWER) {
    return !state;
  }

  return state;
}
