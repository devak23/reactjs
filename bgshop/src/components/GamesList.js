import React from "react";
import PropTypes from "prop-types";
import GameCard from "./GameCard";

// Emmet code: .ui.icon.message>i.icon.info+.content>.header+p

const GamesList = ({ games }) => (
  <div className="ui four cards">
    {games.length === 0 ? (
      <div className="ui icon message">
        <i className="icon info" />
        <div className="content">
          <div className="header">There are no games in your store</div>
          <p>You should add some. Dont you think?</p>
        </div>
      </div>
    ) : (
      games.map(game => <GameCard key={game.id} game={game} />)
    )}
  </div>
);

GamesList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object).isRequired
};

// this is for handling the undefined or null cases!
GamesList.defaultProps = {
  games: []
};

export default GamesList;
