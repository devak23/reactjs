import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class UsersPage extends Component {
  renderUsers = () =>
    this.props.users.map(usr => (
      <li key={usr.id}>
        {' '}
        {usr.first} {usr.last}
      </li>
    ));

  render() {
    return (
      <div>
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

UsersPage.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default connect(mapStateToProps)(UsersPage);
