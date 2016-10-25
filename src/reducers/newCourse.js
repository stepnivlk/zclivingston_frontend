import {
  NEW_COURSE_TYPE,
  NEW_COURSE_NAME,
  NEW_COURSE_DESC,
  NEW_COURSE_USER,
  NEW_COURSE_NEXT,
  NEW_COURSE_PREV,
  NEW_COURSE_START_DATE,
  NEW_COURSE_END_DATE,
  NEW_COURSE_START_TIME,
  NEW_COURSE_END_TIME,
  NEW_COURSE_PERIOD
} from '../actions/const';
import RichTextEditor from 'react-rte'

export function newCourse(state = {
  stepIndex: 0,
  sort: null,
  user_id: null,
  name: '',
  desc: RichTextEditor.createEmptyValue(),
  start_date: null,
  end_date: null,
  start_time: null,
  end_time: null,
  period: 1
}, action) {
  switch (action.type) {
    case NEW_COURSE_TYPE:
      return Object.assign({}, state, {sort: action.sort});
    case NEW_COURSE_NEXT:
      const nextIndex = state.stepIndex + 1
      return Object.assign({}, state, {stepIndex: nextIndex });
    case NEW_COURSE_PREV:
      const prevIndex = state.stepIndex - 1
      return Object.assign({}, state, {stepIndex: prevIndex });
    case NEW_COURSE_NAME:
      return Object.assign({}, state, {name: action.name});
    case NEW_COURSE_USER:
      return Object.assign({}, state, {user_id: action.user_id});
    case NEW_COURSE_DESC:
      return Object.assign({}, state, {desc: action.desc});
    case NEW_COURSE_START_DATE:
      return Object.assign({}, state, {start_date: action.start_date});
    case NEW_COURSE_END_DATE:
      return Object.assign({}, state, {end_date: action.end_date});
    case NEW_COURSE_START_TIME:
      return Object.assign({}, state, {start_time: action.start_time});
    case NEW_COURSE_END_TIME:
      return Object.assign({}, state, {end_time: action.end_time});
    case NEW_COURSE_PERIOD:
      return Object.assign({}, state, {period: action.period});
    default:
      return state;
  }
}
