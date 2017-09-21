import React from 'react';
import { Route } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const HomeButton = ({ path, text }) => (
  <Route
    render={({ history }) => (
      <Button
        className="ui default button"
        style={{ margin: '0 0 0 10px' }}
        onClick={() => history.push(path)}
      >
        {text}
      </Button>
    )}
  />
);

HomeButton.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

HomeButton.defaultProps = {
  path: '/',
  text: 'Cancel',
};

export default HomeButton;
