import { connect } from 'react-redux';
import { coursesIndex } from '../actions';
import Courses from '../components/Courses';

const mapStateToProps = (state) => {
  return {
    courses: state.coursesIndex
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInit: () => {
      dispatch(coursesIndex());
    }
  }
};

const ConnectedCourses = connect(
  mapStateToProps,
  mapDispatchToProps
)(Courses);

export default ConnectedCourses;
