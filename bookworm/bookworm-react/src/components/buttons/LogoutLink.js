import React from 'react';
import PropTypes from 'prop-types';

const LogoutLink = ({ signOff }) => (
  <button className="ui primary button" onClick={() => signOff()}>
    Logout
  </button>
);

LogoutLink.propTypes = {
  signOff: PropTypes.func.isRequired,
};

export default LogoutLink;
