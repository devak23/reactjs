import React from "react";
import PropTypes from "prop-types";

// Emmet code: .ui.secondary.pointing.menu>a.item*2

const TopNavigation = ({ showGameForm }) => (
  <div>
    <div className="ui secondary pointing menu">
      <a href="/" className="item">
        BG Shop
      </a>
      <a role="button" className="item" onClick={() => showGameForm(true)}>
        <i className="icon plus" />Add New Game
      </a>
    </div>
  </div>
);

TopNavigation.propTypes = {
  showGameForm: PropTypes.func.isRequired
};

export default TopNavigation;
