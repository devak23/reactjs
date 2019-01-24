import React from 'react';
import LoginForm from '../forms/LoginForm';

class LoginPage extends React.Component {
  handleSubmit({ email, password }) {
    console.log('Submit is clicked. time to dispatch action: ', email, password);
  }

  render() {
    return (
      <div style={{ marginTop: 170 }}>
        <LoginForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default LoginPage;
