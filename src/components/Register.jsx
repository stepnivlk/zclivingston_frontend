import React, { Component } from 'react';
import { Link } from 'react-router';

class Register extends Component {
  render() {
    return (
      <div className="col-sm-6 col-md-4 col-md-offset-4">
          <h1 className="text-center login-title">Register</h1>
          <div className="account-wall">
              <img className="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                  alt="" />
              <form className="form-signin">
                <input type="text" className="form-control" placeholder="Name" required />
                <input type="text" className="form-control" placeholder="Email" required />
                <input type="password" className="form-control" placeholder="Password" required />
                <input type="password" className="form-control last" placeholder="Password confirmation" required />
                <button className="btn btn-lg btn-primary btn-block" type="submit">
                  Register
                </button>
              </form>
          </div>
          <Link to={'/login'} className="text-center new-account">Sign in an account </Link>
      </div>
    );
  }
}

export default Register;
