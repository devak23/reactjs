import React from "react";
import { Segment } from "semantic-ui-react";
import PropTypes from "prop-types";

const bannerStyle = {
  width: 300,
  padding: 10,
  margin: 10
};

const Banner = ({ message, color, author }) => (
  <Segment style={bannerStyle}>
    <p style={{ color }}>{message}</p>
    <p>
      <strong>- {author}</strong>
    </p>
  </Segment>
);

Banner.propTypes = {
  message: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default Banner;
