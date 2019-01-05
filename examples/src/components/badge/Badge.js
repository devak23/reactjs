import React from "react";
import PropTypes from "prop-types";
import "./Badge.css";

// here we are de-structuring the props so we dont have to repeat ourselves as props.image, props.name and props.username
const Badge = ({ name, username, image }) => (
  <div className="badge">
    <img src={image} alt="avatar" style={{ width: 100, height: 100 }} />
    <h1>Name: {name}</h1>
    <h3>Username: {username}</h3>
  </div>
);

Badge.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Badge;
