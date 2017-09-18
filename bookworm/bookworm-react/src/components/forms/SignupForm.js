import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import isEmpty from 'lodash/isEmpty';
import isEmail from 'validator/lib/isEmail';

import InlineError from '../messages/InlineError';
import CancelButton from '../forms/CancelButton';

class SignupForm extends Component {
  state = {
    data: {
      email: '',
      firstname: '',
      lastname: '',
      password: '',
    },
    loading: false,
    errors: {},
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });

    if (isEmpty(errors)) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false }),
        );
    }
  };

  validate = data => {
    const errors = {};
    if (!isEmail(data.email)) errors.email = 'Please enter a valid email id';
    if (!data.password) errors.password = 'Please enter a valid password';
    if (!data.firstname) errors.firstname = 'Please provide a valid firstname';
    if (!data.lastname) errors.lastname = 'Please provide a valid lastname';

    return errors;
  };

  handleOnChange = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });
  };

  render() {
    const { data, errors, loading } = this.state;

    return (
      <div>
        <Form onSubmit={this.handleSubmit} loading={loading}>
          <Form.Field error={!!errors.email}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={data.email}
              placeholder="my.email@example.com"
              onChange={this.handleOnChange}
            />
            {errors.email && <InlineError text={errors.email} />}
          </Form.Field>
          <Form.Field error={!!errors.password}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={data.password}
              placeholder="Create a secure password"
              onChange={this.handleOnChange}
            />
            {errors.password && <InlineError text={errors.password} />}
          </Form.Field>

          <Form.Field error={!!errors.firstname}>
            <label htmlFor="firstname">Firstname</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="John"
              value={data.firstname}
              onChange={this.handleOnChange}
            />
            {errors.firstname && <InlineError text={errors.firstname} />}
          </Form.Field>

          <Form.Field error={!!errors.lastname}>
            <label htmlFor="lastname">Lastname</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Doe"
              value={data.lastname}
              onChange={this.handleOnChange}
            />
            {errors.lastname && <InlineError text={errors.lastname} />}
          </Form.Field>

          <Form.Field>
            <Button primary>Sign up</Button>
            <CancelButton to="/" text="Back to homepage" />
          </Form.Field>
        </Form>
      </div>
    );
  }
}

SignupForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default SignupForm;
