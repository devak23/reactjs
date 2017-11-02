import React from "react";
import PropTypes from "prop-types";
import GameCard from "./GameCard";
import Message from "./Message";

const GamesList = ({ games }) => (
  <div className="ui four cards">
    {games.length === 0 ? (
      <Message
        content="You should add some. Dont you think?"
        type="error"
        header="There are no games in your store"
      />
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
