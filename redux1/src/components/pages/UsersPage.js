import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import selectUser from '../../actions/userActions';

class UsersPage extends Component {
  renderUsers = () =>
    this.props.users.map(usr => (
      <li key={usr.id}>
        <a
          style={{ cursor: 'pointer' }}
          role="link"
          tabIndex="0"
          onClick={() => this.props.selectUser(usr)}
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectUser }, dispatch);
}

UsersPage.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  selectUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
