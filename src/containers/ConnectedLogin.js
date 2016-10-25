import { connect } from 'react-redux';
import { loginUser } from '../actions';
import Login from '../components/Login';

const mapStateToProps = (state) => {
  return {
    error: state.login.error,
    loggedIn: state.login.loggedIn
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginClick: (email, password) => {
      dispatch(loginUser(email, password));
    }
  }
};

const ConnectedLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default ConnectedLogin;
