import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';
import validator from 'validator';
import PropTypes from 'prop-types';

import {
  Form,
  Segment,
  Message,
  Button,
  Header,
  Divider,
  Grid,
} from 'semantic-ui-react';
import HomeButton from '../buttons/HomeButton';
import InlineError from '../messages/InlineError';

class ForgotPasswordForm extends Component {
  state = {
    data: {
      email: '',
    },
    loading: false,
    errors: {},
  };

  handleOnChange = e =>
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });

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
    if (!validator.isEmail(data.email))
      errors.email = 'Invalid email specified';

    return errors;
  };

  render() {
    const { errors, data, loading } = this.state;

    return (
      <Form onSubmit={this.handleSubmit} loading={loading}>
        <Grid columns={2}>
          <Grid.Column>
            {!!errors.global && <Message negative>{errors.global}</Message>}
            <Segment size="large">
              <Header>Forgot Password</Header>
              <Divider />
              <Header.Content>
                Please enter your registered email id where we will send you the
                link to reset your password.
              </Header.Content>

              <Form.Field style={{ margin: '10px 0' }} error={!!errors.email}>
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
              <Form.Field>
                <Button primary>Send Link</Button>
                <HomeButton />
              </Form.Field>
            </Segment>
          </Grid.Column>
        </Grid>
      </Form>
    );
  }
}

ForgotPasswordForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default ForgotPasswordForm;
