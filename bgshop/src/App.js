import React from "react";
import GamesList from "./components/GamesList";
import games from "./data";

const App = () => (
  <div className="ui container" style={{ marginTop: "40px" }}>
    <GamesList games={games} />
  </div>
);

export default App;
