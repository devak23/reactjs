import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import GameCard from "./components/GameCard";
import games from "./data";

ReactDOM.render(<GameCard game={games[3]} />, document.getElementById("root"));
