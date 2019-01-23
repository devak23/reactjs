import React from 'react';
import LoginForm from '../forms/LoginForm';

class LoginPage extends React.Component {
  state = {};

  render() {
    return (
      <div style={{ marginTop: 170 }}>
        <LoginForm />
      </div>
    );
  }
}

export default LoginPage;
