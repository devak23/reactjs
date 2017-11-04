import React from "react";

class GameForm extends React.Component {
  state = {
    title: ""
  };

  handleOnChange = e => this.setState({ title: e.target.value });

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
        <button className="ui button" type="submit">
          Create
        </button>
      </form>
    );
  }
}

export default GameForm;
