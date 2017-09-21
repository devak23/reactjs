import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';
import * as actions from '../../actions/auth';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
import LogoutLink from '../buttons/LogoutLink';

const DashboardPage = ({ isConfirmed, logout }) => (
  <div style={{ margin: '20px 0' }}>
    {!isConfirmed && <ConfirmEmailMessage />}
    {isConfirmed && (
      <Message>
        <Message.Header>Welcome!</Message.Header>
        <Message.Content>
          Hello there. Welcome to your dashboard
        </Message.Content>
      </Message>
    )}
    <LogoutLink signOff={logout} />
  </div>
);

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed,
  };
}

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { logout: actions.logout })(
  DashboardPage,
);
