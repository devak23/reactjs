import React from 'react';
import Validator from 'validator';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { Form, Button, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import InlineError from '../messages/InlineError';
import HomeButton from '../buttons/HomeButton';

/**
 * The LoginForm is going to store state. One approach is to store everything
 * in Redux. The approach taken here is not to store everything but only the
 * very essentials into Redux. Especially with forms, there is no need for an
 * average form to be stored in Redux store. Form data need not be stored
 * because we are interested in submitting this data. Only in the case of very
 * functional and super-cool, smart form is needed, then the form can be
 * connected to Redux. However this is a login form and hence there is no need
 * for such smarts.
 */
class LoginForm extends React.Component {
  state = {
    data: {
      email: '',
      password: '',
    },
    loading: false,
    errors: {},
  };

  /**
   * The submit function will do the following:
   * 1. Validate data.
   * 2. Pass the data to the parent's submit function that was passed in as a
   * prop to the LoginForm
   * 3. Handle the server side errors
   */
  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });

    if (isEmpty(errors)) {
      this.setState({ loading: true });

      this.props.submit(this.state.data).catch(err =>
        this.setState({
          errors: err.response.data.errors
            ? err.response.data.errors
            : { global: 'Server is un-reachable' },
          loading: false,
        }),
      );
    }
  };

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });
  };

  validate = data => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = 'Invalid email';
    if (!data.password) errors.password = 'Password cannot be blank';
    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;

    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        {errors.global && (
          <Message negative>
            <Message.Header>Something went Wrong!</Message.Header>
            <p>{errors.global}</p>
          </Message>
        )}
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
            value={data.email}
            onChange={this.onChange}
          />
          {errors.email && <InlineError text={errors.email} />}
        </Form.Field>

        <Form.Field error={!!errors.password}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={data.password}
            placeholder="Make it secure"
            onChange={this.onChange}
          />
          {errors.password && <InlineError text={errors.password} />}
        </Form.Field>

        <Form.Field>
          <Button primary>Login</Button>
          <HomeButton to="/" text="Back to homepage" />
          <span style={{ margin: '0px 10px' }}>
            <Link to="/forgot_password">Forgot Password</Link>
          </span>
        </Form.Field>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default LoginForm;
