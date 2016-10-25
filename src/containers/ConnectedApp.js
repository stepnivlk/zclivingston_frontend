import { connect } from 'react-redux';
import App from '../components/App';
import { toggleDrawer } from '../actions';

const mapStateToProps = (state) => {
  return {
    login: state.login,
    drawer: state.drawer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDrawerToggleClick: () => {
      dispatch(toggleDrawer());
    }
  };
}


const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;
