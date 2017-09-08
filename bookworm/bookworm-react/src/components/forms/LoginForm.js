import React from "react";
import { Form, Button } from "semantic-ui-react";
import Validator from 'validator';
import InlineError from "../messages/InlineError";
import PropTypes from "prop-types";

class LoginForm extends React.Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  };

  onSubmit =()=> {
    // validate for errors
    const errors = this.validate(this.state.data);
    this.setState({errors});

    // pass it to submit function
    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data);
    }
    // handle errors from the server
  };

  validate = (data) => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "Password cannot be blank";
    return errors;
  };

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    })
  };

  render() {
    const { data, errors } = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
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


        <Form.Field error={!! errors.password}>
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
        </Form.Field>
      </Form>
    )
  }
}

LoginForm.PropTypes = {
  submit: PropTypes.func.isRequired
};

export default LoginForm;