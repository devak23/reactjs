import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions/auth';
import LogoutLink from '../buttons/LogoutLink';

// Again this is a functional component as no state is required to be
// maintained
const HomePage = ({ isAuthenticated, logout }) => (
  <div style={{ margin: '20px 0' }}>
    <h1>Home Page</h1>
    {isAuthenticated ? (
      <LogoutLink signOff={logout} />
    ) : (
      <div>
        <Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link>
      </div>
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
