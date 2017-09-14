import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions/auth';

// Again this is a functional component as no state is required to be
// maintained
const HomePage = ({ isAuthenticated, logout }) => (
  <div>
    <h1>Home Page</h1>
    {isAuthenticated ? (
      <button className="ui primary button" onClick={() => logout()}>
        Logout
      </button>
    ) : (
      <Link to="/login">Login</Link>
    )}
  </div>
);

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token,
  };
}

export default connect(mapStateToProps, { logout: actions.logout })(HomePage);
