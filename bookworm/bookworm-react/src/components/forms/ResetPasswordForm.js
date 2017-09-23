import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';

import {
  Form,
  Segment,
  Grid,
  Header,
  Divider,
  Button,
  List,
} from 'semantic-ui-react';
import InlineError from '../messages/InlineError';
import HomeButton from '../buttons/HomeButton';

class ResetPasswordForm extends Component {
  state = {
    data: {
      token: this.props.token,
      password: '',
      confirmPassword: '',
    },
    loading: false,
    errors: {},
  };

  handleOnChange = e => {
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });
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
    if (isEmpty(data.confirmPassword))
      errors.confirmPassword = 'Confirm Password cannot be blank';
    if (isEmpty(data.password)) errors.password = 'Password cannot be blank';
    if (data.password !== data.confirmPassword)
      errors.password = 'Passwords dont match';

    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;

    return (
      <div style={{ margin: '10px 0' }}>
        <Grid columns={2}>
          <Grid.Column>
            <Segment size="large">
              <Header>Reset Password</Header>
              <Divider />
              <Header.Content>
                <List>
                  <List.Item>
                    1. You have been successfully identified
                  </List.Item>
                  <List.Item>
                    2. You now set the new password. The account will be enabled
                    with the new password
                  </List.Item>
                  <List.Item>
                    3. Please have a secure password of 8 characters long with
                    mixed case letters numbers and special characters
                  </List.Item>
                </List>
              </Header.Content>
              <p />
              <Form loading={loading} onSubmit={this.handleSubmit}>
                <Form.Field error={!!errors.password}>
                  <label htmlFor="password">New Password</label>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    value={data.password}
                    onChange={this.handleOnChange}
                  />
                  {errors.password && <InlineError text={errors.password} />}
                </Form.Field>
                <Form.Field error={!!errors.confirmPassword}>
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="text"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={data.confirmPassword}
                    onChange={this.handleOnChange}
                  />
                  {errors.confirmPassword && (
                    <InlineError text={errors.confirmPassword} />
                  )}
                </Form.Field>
                <Form.Field>
                  <Button primary> Reset </Button>
                  <HomeButton />
                </Form.Field>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

ResetPasswordForm.propTypes = {
  submit: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
};

export default ResetPasswordForm;
