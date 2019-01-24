import React from 'react';
import { Link } from 'react-router-dom';
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

  handleOnChange = e => {
    console.log(e.target.value);
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
          <Link to='/register' style={registerLink}>
            Register
          </Link>
        </p>
        <input
          style={{ ...flexItem, ...flexInput }}
          placeholder='Email address'
          name='email'
          type='text'
          onChange={this.handleOnChange}
        />
        {errors.email && <InLineMessage message={errors.email} />}
        <input
          style={{ ...flexItem, ...flexInput }}
          placeholder='Password'
          name='password'
          type='password'
          onChange={this.handleOnChange}
        />
        {errors.password && <InLineMessage message={errors.password} />}
        <button style={{ ...flexItem, ...flexButton, ...loginButton }} type='submit' onClick={this.handleLoginClick}>
          Log in
        </button>
        <Link to='/recovery' style={{ ...flexItem, ...forgotLink }}>
          Forgotten your password?
        </Link>
      </form>
    );
  }
}
export default LoginForm;
