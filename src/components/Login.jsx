import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';

class Login extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      browserHistory.replace('/dashboard');
    }
  }

  handleLoginClick = (e) => {
    e.preventDefault();
    this.props.onLoginClick(this.refs.email.value, this.refs.password.value);
  }

  render() {
    return (
      <div className="col-sm-6 col-md-4 col-md-offset-4">
        <h1 className="text-center login-title">Sign in</h1>
        <div className="account-wall">
          <img className="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120" alt="" />
          {this.props.error &&
            <div className="text-center text-danger">{this.props.error}</div>
          }
          <form className="form-signin">
            <input ref='email' type="text" className="form-control" placeholder="Email" required />
            <input ref='password' type="password" className="form-control last" placeholder="Password" required />
            <button onClick={this.handleLoginClick} className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            <label className="checkbox pull-left">
              <input type="checkbox" value="remember-me" />
              Remember me
            </label>
            <a href="#" className="pull-right need-help">Need help? </a><span className="clearfix"></span>
          </form>
        </div>
        <Link to={'/register'} className="text-center new-account">Create an account</Link>
      </div>
    );
  }
}

export default Login;
