import { connect } from 'react-redux';
import { course } from '../actions';
import Show from '../components/courses/Show';

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

const Course = connect(
  mapStateToProps,
  mapDispatchToProps
)(Show);

export default Course;
