// External
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Components
import ConnectedCourse from './containers/ConnectedCourse';
import ConnectedApp from './containers/ConnectedApp';
import Dashboard from './components/Dashboard';
import NewCourse from './containers/NewCourse';
import ConnectedCourses from './containers/ConnectedCourses';
import ConnectedLogin from './containers/ConnectedLogin';
import Register from './components/Register';

// Css
import './index.css';

// Reducers, Actions
import rootReducer from './reducers';
import { currentUser } from './actions';

// Config
injectTapEventPlugin();
axios.defaults.baseURL = 'http://localhost:3000/api/';

// Inital store setup
const store = createStore(rootReducer, applyMiddleware(thunk, logger()));

// Authorization
const requireViewer = (nextState, replace) => { 
  const token = localStorage.getItem('token');
  if (!token) {
    replace('/login');
  } else {
    axios.defaults.headers.common['Authorization'] = token;
    !store.getState().login.name && store.dispatch(currentUser());
  }
}

ReactDOM.render(
  <Provider store={store} >
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path="/">
          <Route path="/admin" component={ConnectedApp} onEnter={requireViewer}>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/courses" component={ConnectedCourses} />
            <Route path="/courses/:id" component={ConnectedCourse} />
            <Route path="/new_course" component={NewCourse} />
          </Route>
        </Route>
        <Route path="/login" component={ConnectedLogin} />
        <Route path="/register" component={Register} />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
