import React from "react";
import PropTypes from "prop-types";

const buttonStyle = {
  border: 0,
  background: "rbga(0,0,0,0.4)",
  color: "#FFF",
  padding: "10px",
  opacity: 0.3,
  cursor: "pointer"
};

const Button = ({ text, handleClick }) => (
  <button style={buttonStyle} onClick={handleClick}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Button;
