import React from 'react';
import InLineMessage from '../others/InLineMessage';
import {
  flexContainer,
  flexItem,
  flexInput,
  flexButton,
  loginButton,
  forgotLink,
  registerLink
} from './styles/LoginFormStyle';

class LoginForm extends React.Component {
  state = {
    data: {},
    errors: {
      // email: 'Email is a required field',
      // password: 'Password is a required field'
    }
  };

  handleLoginClick() {
    console.log('Login clicked');
  }
  render() {
    const { errors } = this.state;
    return (
      <form style={flexContainer}>
        <p style={flexItem}>
          Please Log In, or{' '}
          <a style={registerLink} href=''>
            Register
          </a>
        </p>
        <input style={{ ...flexItem, ...flexInput }} placeholder='Email address' name='email' type='text' value="abhaykulkarni23@yahoo.com"/>
        {errors.email && <InLineMessage message={errors.email} />}
        <input style={{ ...flexItem, ...flexInput }} placeholder='Password' name='password' type='password' value="this is password"/>
        {errors.password && <InLineMessage message={errors.password} />}
        <button style={{ ...flexItem, ...flexButton, ...loginButton }} type='submit' onClick={this.handleLoginClick}>
          Log in
        </button>
        <a style={{ ...flexItem, ...forgotLink }} href=''>
          Forgotten your password?
        </a>
      </form>
    );
  }
}
export default LoginForm;
