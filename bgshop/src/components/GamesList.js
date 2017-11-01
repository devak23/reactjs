import React from "react";
import PropTypes from "prop-types";
import GameCard from "./GameCard";

const GamesList = ({ games }) => (
  <div className="ui four cards">
    {games && games.map(game => <GameCard key={game.id} game={game} />)}
  </div>
);

GamesList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default GamesList;
