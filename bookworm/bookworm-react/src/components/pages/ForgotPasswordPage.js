import React, { Component } from 'react';
import { Message, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { resetPasswordRequest } from '../../actions/auth';

import ForgotPasswordForm from '../forms/ForgotPasswordForm';

class ForgotPasswordPage extends Component {
  state = {
    success: false,
  };

  submit = data =>
    this.props.resetPasswordRequest(data).then(() => {
      this.setState({ success: true });
    });

  render() {
    const { success } = this.state;
    return (
      <div style={{ margin: '10px 0' }}>
        {success ? (
          <Message success icon>
            <Icon name="checkmark" />
            <Message.Content>
              <Message.Header>
                Email with the reset link has been sent to your registered email
                address
              </Message.Header>
            </Message.Content>
          </Message>
        ) : (
          <ForgotPasswordForm submit={this.submit} />
        )}
      </div>
    );
  }
}

ForgotPasswordPage.propTypes = {
  resetPasswordRequest: PropTypes.func.isRequired,
};

export default connect(null, { resetPasswordRequest })(ForgotPasswordPage);
