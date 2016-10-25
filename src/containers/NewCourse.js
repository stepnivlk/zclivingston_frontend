import { connect } from 'react-redux';
import {
  newCourseType,
  newCourseNext,
  newCoursePrev,
  newCourseName,
  newCourseDesc,
  newCourseStartDate,
  newCourseEndDate,
  newCourseStartTime,
  newCourseEndTime,
  newCoursePeriod
} from '../actions';
import New from '../components/courses/New';

const mapStateToProps = (state) => {
  return state.newCourse;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTypeClick: (type) => {
      dispatch(newCourseType(type));
    },
    onNextClick: () => {
      dispatch(newCourseNext());
    },
    onPrevClick: () => {
      dispatch(newCoursePrev());
    },
    onNameChange: (name) => {
      dispatch(newCourseName(name));
    },
    onDescChange: (desc) => {
      dispatch(newCourseDesc(desc));
    },
    onStartDateChange: (date) => {
      dispatch(newCourseStartDate(date));
    },
    onEndDateChange: (date) => {
      dispatch(newCourseEndDate(date));
    },
    onStartTimeChange: (time) => {
      dispatch(newCourseStartTime(time));
    },
    onEndTimeChange: (time) => {
      dispatch(newCourseEndTime(time));
    },
    onPeriodChange: (period) => {
      dispatch(newCoursePeriod(period));
    }
  }
};

const NewCourse = connect(
  mapStateToProps,
  mapDispatchToProps
)(New);

export default NewCourse;
