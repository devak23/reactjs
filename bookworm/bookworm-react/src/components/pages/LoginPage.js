import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import LoginForm from "../forms/LoginForm";
import { login } from '../../actions/auth';

// The login page contains the login form. It will pass the submit function to the
// login form. The login form gathers data and invokes the submit function on this 
// class. The login form doesn't know anything about what will happen to the data
// it passes to the LoginPage.
class LoginPage extends React.Component {

  submit = data => this.props.login(data).then(() => this.props.history.push('/'));

  render() {
    return (
      <div>
        <h1> Login Page</h1>
        <LoginForm submit={this.submit}/>
      </div>
    );
  }
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired

}

export default connect(null, { login })(LoginPage);
