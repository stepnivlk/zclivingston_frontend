import { connect } from 'react-redux';
import { fetchUsers, newCourseUser } from '../actions';
import UsersList from '../components/UsersList';

const mapStateToProps = (state) => {
  return {
    users: state.users,
    userId: state.newCourse.user_id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInit: () => {
      dispatch(fetchUsers());
    },
    onUserChange: (user) => {
      dispatch(newCourseUser(user));
    }
  }
};

const ConnectedUsersList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);

export default ConnectedUsersList;
