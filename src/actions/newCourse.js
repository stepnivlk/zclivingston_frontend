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
} from './const';

export function newCourseType(type) {
  return {
    type: NEW_COURSE_TYPE,
    sort: type
  }
}

export function newCourseNext() {
  return {
    type: NEW_COURSE_NEXT
  }
}

export function newCoursePrev() {
  return {
    type: NEW_COURSE_PREV
  }
}

export function newCourseName(name) {
  return {
    type: NEW_COURSE_NAME,
    name: name
  }
}

export function newCourseDesc(desc) {
  return {
    type: NEW_COURSE_DESC,
    desc: desc
  }
}

export function newCourseUser(user_id) {
  return {
    type: NEW_COURSE_USER,
    user_id: user_id
  }
}

export function newCourseStartDate(startDate) {
  return {
    type: NEW_COURSE_START_DATE,
    start_date: startDate
  }
}

export function newCourseEndDate(endDate) {
  return {
    type: NEW_COURSE_END_DATE,
    end_date: endDate
  }
}

export function newCourseStartTime(startTime) {
  return {
    type: NEW_COURSE_START_TIME,
    start_time: startTime
  }
}

export function newCourseEndTime(endTime) {
  return {
    type: NEW_COURSE_END_TIME,
    end_time: endTime
  }
}

export function newCoursePeriod(period) {
  return {
    type: NEW_COURSE_PERIOD,
    perido: period
  }
}
