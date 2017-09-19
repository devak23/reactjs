import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';

const DashboardPage = ({ isConfirmed }) => (
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
  </div>
);

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed,
  };
}

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
};

// DashboardPage.defaultProps = {
//   isConfirmed: false,
// };

export default connect(mapStateToProps)(DashboardPage);
