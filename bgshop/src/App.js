import React from "react";
import GamesList from "./components/GamesList";
import games from "./data";

const App = () => (
  <div className="ui container">
    <GamesList games={games} />
  </div>
);

export default App;
