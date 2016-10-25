import { GET_COURSE } from '../actions/const';

export function course(state = [], action) {
  switch (action.type) {
    case GET_COURSE:
      return {
        ...state,
        [action.course.id]: action.course
      };
    default:
      return state;
  }
}
