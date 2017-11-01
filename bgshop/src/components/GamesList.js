import React from "react";
import GameCard from "./GameCard";

const GamesList = ({ games }) => (
  <div className="ui four cards">
    {games && games.map(game => <GameCard key={game.id} game={game} />)}
  </div>
);

export default GamesList;
