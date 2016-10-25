import { combineReducers } from 'redux';

import { coursesIndex } from './coursesIndex';
import { course } from './course';
import { drawer } from './drawer';
import { login } from './login';
import { newCourse } from './newCourse';
import { users } from './users';

const rootReducer = combineReducers({
  login,
  drawer,
  coursesIndex,
  course,
  newCourse,
  users
})

export default rootReducer;
