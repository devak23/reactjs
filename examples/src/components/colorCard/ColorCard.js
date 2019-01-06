import React from "react";
import PropTypes from "prop-types";

const ColorCard = props => {
  const cardStyle = {
    maxHeight: 300,
    width: 150,
    minHeight: 300,
    backgroundColor: props.color,
    padding: 10,
    margin: 10
  };

  const labelStyle = {
    fontSize: 28,
    textAlign: "center"
  };
  return (
    <div>
      <div style={cardStyle} />
      <div style={labelStyle}>{props.color}</div>
    </div>
  );
};

export default ColorCard;

ColorCard.propTypes = {
  color: PropTypes.string.isRequired
};
