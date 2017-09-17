import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import { isEmpty } from 'lodash/isEmpty';
import validator from 'validator';

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
    this.setState(errors);

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
    if (!validator.isEmail(data.email))
      errors.email = 'Please enter a valid email id';

    return errors;
  };

  handleOnChange = () => {};

  render() {
    const { data, errors, loading } = this.state;

    return (
      <div>
        <Form onSubmit={this.handleSubmit} loading={loading}>
          <Form.Field>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={data.email}
              onChange={this.handleOnChange}
            />
            {errors.email && <InlineError text={errors.email} />}
          </Form.Field>
          <Form.Field>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="email"
              id="email"
              value={data.password}
              onChange={this.handleOnChange}
            />
            {errors.password && <InlineError text={errors.password} />}
          </Form.Field>
          <Form.Field>
            <Button className="ui primary button">Sign up</Button>
            <CancelButton to="/" text="Cancel" />
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
