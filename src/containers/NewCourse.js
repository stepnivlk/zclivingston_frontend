import { connect } from 'react-redux';
import {
  newCourseType,
  newCourseNext,
  newCoursePrev,
  newCourseName,
  newCourseDesc,
} from '../actions';
import New from '../components/courses/New';

const mapStateToProps = (state) => {
  return {
    sort: state.newCourse.sort,
    stepIndex: state.newCourse.stepIndex,
    name: state.newCourse.name,
    desc: state.newCourse.desc,
    user: state.newCourse.user
  };
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
  }
};

const NewCourse = connect(
  mapStateToProps,
  mapDispatchToProps
)(New);

export default NewCourse;
