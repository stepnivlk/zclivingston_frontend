import { connect } from 'react-redux';
import { course } from '../actions';
import Course from '../components/Course';

const mapStateToProps = (state) => {
  return {
    course: state.course
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInit: (courseId) => {
      dispatch(course(courseId));
    }
  }
};

const ConnectedCourse = connect(
  mapStateToProps,
  mapDispatchToProps
)(Course);

export default ConnectedCourse;
