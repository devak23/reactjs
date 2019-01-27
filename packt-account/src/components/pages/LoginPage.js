import React, { Component } from 'react';
import { login } from '../actions/user-action';
import LoginForm from '../forms/LoginForm';

class LoginPage extends Component {
  handleSubmit = ({ email, password }) => {
    console.log('email, password: ', { email, password });
    login({ email, password });
    this.props.history.push('/myaccount');
  };

  render() {
    return (
      <div style={{ marginTop: 170 }}>
        <LoginForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default LoginPage;
