import React from 'react';
import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Banner = ({ message, color, author }) => (
    <Segment>
        <p style={{ color }}>{message}</p>
        <p><strong>- {author}</strong></p>
    </Segment>
);

Banner.propTypes = {
  message: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default Banner;
