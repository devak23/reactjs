import React from "react";
import GamesList from "./GamesList";
import _orderBy from "lodash/orderBy";
import GameForm from "../forms/GameForm";
import { gameData, gamePublishers } from "../../data";
import TopNavigation from "./TopNavigation";

class Dashboard extends React.Component {
  state = {
    showForm: false,
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

  handleShowForm = showForm => this.setState({ showForm });

  render() {
    const numberOfColumns = this.state.showForm ? "ten" : "sixteen";
    return (
      <div className="ui container">
        <TopNavigation showGameForm={this.handleShowForm} />
        <br />
        <div className="ui stackable grid">
          {this.state.showForm && (
            <div className="six wide column">
              <GameForm
                publishers={gamePublishers}
                showGameForm={this.handleShowForm}
              />
            </div>
          )}

          <div className={`${numberOfColumns} wide column`}>
            <GamesList
              games={this.state.games}
              toggleFeatured={this.toggleFeatured}
              handleRating={this.handleRating}
            />
          </div>
        </div>
        {/* {this.state.showForm ? (
          <GameForm
            publishers={gamePublishers}
            showGameForm={this.handleShowForm}
          />
        ) : (
          <GamesList
            games={this.state.games}
            toggleFeatured={this.toggleFeatured}
            handleRating={this.handleRating}
          />
        )} */}
      </div>
    );
  }
}

export default Dashboard;
