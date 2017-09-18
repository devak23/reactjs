import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';

const DashboardPage = ({ confirmed }) => (
  <div style={{ margin: '20px 0' }}>
    {!confirmed && <ConfirmEmailMessage />}
  </div>
);

function mapStateToProps(state) {
  return {
    confirmed: state.user.confirmed,
  };
}

DashboardPage.propTypes = {
  confirmed: PropTypes.bool.isRequired,
};

DashboardPage.defaultProps = {
  confirmed: false,
};

export default connect(mapStateToProps)(DashboardPage);
