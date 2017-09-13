import React from 'react';
import PropTypes from 'prop-types';

// InlineError was created because we are using Semantic UI and at present
// there is no provision for showing an inline error. It has big messages to
// display big errors, but it does not have a structure for small messages
// like: "email is required"
const InlineError = ({ text }) => (
  <span style={{ color: '#AE5856' }}>{text}</span>
);

InlineError.propTypes = {
  text: PropTypes.string.isRequired,
};

export default InlineError;
