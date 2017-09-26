import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import selectUser from '../../actions/userActions';

class UsersPage extends Component {
  handleClick = user => selectUser(user);

  renderUsers = () =>
    this.props.users.map(usr => (
      <li key={usr.id}>
        <a
          style={{ cursor: 'pointer' }}
          role="link"
          tabIndex="0"
          onClick={() => this.handleClick(usr)}
        >
          {usr.first} {usr.last}
        </a>
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
