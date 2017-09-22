import React, { Component } from 'react';
import { Message, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ResetPasswordForm from '../forms/ResetPasswordForm';
import { validateToken } from '../../actions/auth';

class ResetPasswordPage extends Component {
  state = {
    loading: true,
    success: false,
  };

  componentDidMount() {
    this.props
      .validateToken(this.props.match.params.token)
      .then(() => this.setState({ loading: false, success: true }))
      .catch(() => this.setState({ loading: false, success: false }));
  }

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { loading, success } = this.state;
    return (
      <div style={{ margin: '10px 0' }}>
        {loading &&
          !success && (
            <Message>
              <Message.Content>
                We are verifying your identity, please wait...
                <Icon as="i" name="refresh" size="large" loading />
              </Message.Content>
            </Message>
          )}

        {!loading && success && <ResetPasswordForm submit={this.onSubmit} />}

        {!loading &&
          !success && (
            <Message negative>
              <Message.Header>Invalid Token!</Message.Header>
              <Message.Content>
                We could not identify you. Please reset the password again
              </Message.Content>
            </Message>
          )}
      </div>
    );
  }
}

ResetPasswordPage.propTypes = {
  validateToken: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default connect(null, { validateToken })(ResetPasswordPage);
