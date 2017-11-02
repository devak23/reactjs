import React from "react";
import GamesList from "./components/GamesList";
import games from "./data";

class App extends React.Component {
  state = {
    games: []
  };

  componentDidMount = () => this.setState({ games });

  render() {
    return (
      <div className="ui container" style={{ marginTop: "40px" }}>
        <GamesList games={this.state.games} />
      </div>
    );
  }
}

export default App;
