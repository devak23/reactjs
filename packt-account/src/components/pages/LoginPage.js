import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/user-action';
import LoginForm from '../forms/LoginForm';

class LoginPage extends Component {
  handleSubmit = ({ email, password }) => {
    console.log('email, password: ', { email, password });
    this.props.login({ email, password });
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

export default connect(
  null,
  { login }
)(LoginPage);
