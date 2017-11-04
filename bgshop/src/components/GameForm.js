import React from "react";

class GameForm extends React.Component {
  state = {
    title: "",
    description: "",
    duration: 0,
    price: 0,
    players: ""
  };

  handleOnChange = e =>
    this.setState({
      [e.target.name]:
        e.target.type === "number"
          ? parseInt(e.target.value, 10)
          : e.target.value
    });

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="field">
          <label htmlFor="title">Game Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter full game title"
            value={this.state.title}
            onChange={this.handleOnChange}
          />
        </div>
        <div className="field">
          <label htmlFor="description">Game Description</label>
          <textarea
            type="text"
            name="description"
            id="description"
            value={this.state.description}
            onChange={this.handleOnChange}
          />
        </div>
        <div className="three fields">
          <div className="field">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              value={this.state.price}
              onChange={this.handleOnChange}
            />
          </div>
          <div className="field">
            <label htmlFor="duration">Duration (in mins) </label>
            <input
              type="number"
              name="duration"
              id="duration"
              value={this.state.duration}
              onChange={this.handleOnChange}
            />
          </div>
          <div className="field">
            <label htmlFor="players">Players</label>
            <input
              type="text"
              name="players"
              id="players"
              value={this.state.players}
              onChange={this.handleOnChange}
            />
          </div>
        </div>
        <button className="ui button" type="submit">
          Create
        </button>
      </form>
    );
  }
}

export default GameForm;
