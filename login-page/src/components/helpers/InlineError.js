import React from 'react';
import PropTypes from 'prop-types';

const InlineError = ({text}) => (<span style={{color: "#AE5856"}}>{text}</span>)

InlineError.propTypes = {
  text: PropTypes.string.isRequired
};

InlineError.defaultProps = {
  text: ''
}

export default InlineError;
