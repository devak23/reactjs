import React from "react";
import GamesList from "./components/GamesList";
import _orderBy from "lodash/orderBy";
import GameForm from "./components/GameForm";
// import _find from "lodash/find";
import { gameData, gamePublishers } from "./data";

class App extends React.Component {
  state = {
    games: []
  };

  sortGames(games) {
    return _orderBy(
      games,
      ["rating", "featured", "title"],
      ["desc", "asc", "asc"]
    );
  }

  componentDidMount = () =>
    this.setState({
      games: this.sortGames(gameData)
    });

  toggleFeatured = id => {
    // MUTATING------------
    // const { games } = this.state;
    // const game = _find(games, { id });
    // game.featured = !game.featured;
    // this.setState({ games: this.sortGames(games) });

    // NON-MUTATING------------
    // const newGames = this.state.games.map(game => {
    //   if (game.id === id) {
    //     return { ...game, featured: !game.featured };
    //   }
    //   return game;
    // });
    // this.setState({ games: this.sortGames(newGames) });

    // CONCISE ------------------
    this.setState({
      games: this.sortGames(
        this.state.games.map(
          game =>
            game.id === id ? { ...game, featured: !game.featured } : game
        )
      )
    });
  };

  handleRating = (id, newRating) => {
    this.setState({
      games: this.sortGames(
        this.state.games.map(
          game => (game.id === id ? { ...game, rating: newRating } : game)
        )
      )
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "40px" }}>
        <GameForm publishers={gamePublishers} />
        <br />
        <GamesList
          games={this.state.games}
          toggleFeatured={this.toggleFeatured}
          handleRating={this.handleRating}
        />
      </div>
    );
  }
}

export default App;
