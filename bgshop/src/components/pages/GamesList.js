import React from "react";
import PropTypes from "prop-types";
import GameCard from "./GameCard";
import Message from "../helpers/Message";

const GamesList = ({ games, toggleFeatured, handleRating, editGame }) => (
  <div className="ui four cards">
    {games.length === 0 ? (
      <Message
        content="You should add some. Dont you think?"
        type="error"
        header="There are no games in your store"
      />
    ) : (
      games.map(game => (
        <GameCard
          key={game.id}
          game={game}
          toggleFeatured={toggleFeatured}
          handleRating={handleRating}
          editGame={editGame}
        />
      ))
    )}
  </div>
);

GamesList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleFeatured: PropTypes.func.isRequired,
  handleRating: PropTypes.func.isRequired,
  editGame: PropTypes.func.isRequired
};

// this is for handling the undefined or null cases!
GamesList.defaultProps = {
  games: []
};

export default GamesList;
