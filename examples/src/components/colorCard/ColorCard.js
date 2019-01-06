import React from "react";
import PropTypes from "prop-types";

const ColorCard = props => {
  const cardStyle = {
    maxHeight: 200,
    width: 150,
    minHeight: 200,
    backgroundColor: props.color,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    boxShadow: `1px 3px 1px #CCC`
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
