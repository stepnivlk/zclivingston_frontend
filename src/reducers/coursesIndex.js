import { GET_COURSES } from '../actions/const';

export function coursesIndex(state = [], action) {
  switch (action.type) {
    case GET_COURSES:
      return action.coursesIndex;
    default:
      return state;
  }
}
