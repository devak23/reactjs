import React from "react";
import maxBy from "lodash/maxBy";
import GamesList from "./GamesList";
import _orderBy from "lodash/orderBy";
import GameForm from "../forms/GameForm";
import { gameData, gamePublishers } from "../../data";
import TopNavigation from "./TopNavigation";

class Dashboard extends React.Component {
  state = {
    showGameForm: false,
    games: [],
    selectedGame: {}
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

  handleShowGameForm = () =>
    this.setState({ showGameForm: true, selectedGame: {} });

  handleHideGameForm = () =>
    this.setState({ showGameForm: false, selectedGame: {} });

  saveGame = game => {
    console.log(game);
    game.id ? this.updateGame(game) : this.addGame(game);
  };

  updateGame = game =>
    this.setState({
      games: this.sortGames(
        this.state.games.map(item => (item.id === game.id ? game : item))
      ),
      showGameForm: false
    });

  addGame = game =>
    this.setState({
      games: this.sortGames([
        ...this.state.games,
        { ...game, id: maxBy(this.state.games, "id").id + 1 }
      ]),
      showGameForm: false
    });

  handleEditGame = game =>
    this.setState({ selectedGame: game, showGameForm: true });

  handleDeleteGame = game =>
    this.setState({
      games: this.sortGames(
        this.state.games.filter(item => item.id !== game.id)
      ),
      showGameForm: false
    });

  render() {
    const numberOfColumns = this.state.showGameForm ? "ten" : "sixteen";
    return (
      <div className="ui container">
        <TopNavigation showGameForm={this.handleShowGameForm} />
        <br />
        <div className="ui stackable grid">
          {this.state.showGameForm && (
            <div className="six wide column">
              <GameForm
                publishers={gamePublishers}
                hideGameForm={this.handleHideGameForm}
                submit={this.saveGame}
                game={this.state.selectedGame}
              />
            </div>
          )}

          <div className={`${numberOfColumns} wide column`}>
            <GamesList
              games={this.state.games}
              toggleFeatured={this.toggleFeatured}
              handleRating={this.handleRating}
              editGame={this.handleEditGame}
              deleteGame={this.handleDeleteGame}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
