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
      oldPassword: '',
      newPassword: '',
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
    if (isEmpty(data.oldPassword))
      errors.oldPassword = 'Old Password cannot be blank';
    if (isEmpty(data.newPassword))
      errors.newPassword = 'New Password cannot be blank';

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
                <Form.Field error={!!errors.oldPassword}>
                  <label htmlFor="oldPassword">Old Password</label>
                  <input
                    type="text"
                    name="oldPassword"
                    id="oldPassword"
                    value={data.oldPassword}
                    onChange={this.handleOnChange}
                  />
                  {errors.oldPassword && (
                    <InlineError text={errors.oldPassword} />
                  )}
                </Form.Field>
                <Form.Field error={!!errors.newPassword}>
                  <label htmlFor="newPassword">New Password</label>
                  <input
                    type="text"
                    name="newPassword"
                    id="newPassword"
                    value={data.newPassword}
                    onChange={this.handleOnChange}
                  />
                  {errors.newPassword && (
                    <InlineError text={errors.newPassword} />
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
};

export default ResetPasswordForm;
