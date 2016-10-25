import axios from 'axios';
import { GET_COURSES, GET_COURSE } from './const';

export function getCourses(courses) {
  return {
    type: GET_COURSES,
    coursesIndex: courses
  }
}

export function getCourse(course) {
  return {
    type: GET_COURSE,
    course: course
  }
}

export function coursesIndex() {
  return dispatch => {
    return axios.get('courses')
    .then(response => {
      dispatch(getCourses(response.data));
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
      }
    });
  }
}

export function course(courseId) {
  return dispatch => {
    return axios.get(`courses/${courseId}`)
    .then(response => {
      dispatch(getCourse(response.data));
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
      }
    });
  }
}
