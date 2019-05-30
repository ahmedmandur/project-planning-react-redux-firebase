import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
import { Helmet } from 'react-helmet';

class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" exact />;
    return (
      <div className="container">
        <Helmet>
          <title>Sign Up - Project Planner</title>
        </Helmet>
        <div className="row">
          <div className="col s12 m6 offset-m3">
            <form className="white" onSubmit={this.handleSubmit}>
              <h5 className="grey-text text-darken-3">Create new account!</h5>

              <div className="input-field">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  onChange={this.handleChange}
                  autoComplete="off"
                />
              </div>

              <div className="input-field">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  onChange={this.handleChange}
                  autoComplete="off"
                />
              </div>
              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  onChange={this.handleChange}
                  autoComplete="off"
                />
              </div>
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-field">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">
                  Sign Up
                </button>
                <div className="red-text center">
                  {authError ? <p>{authError}</p> : null}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  authError: state.auth.authError,
  auth: state.firebase.auth
});

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
