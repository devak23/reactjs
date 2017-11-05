import React from "react";

const gameTags = [
  { _id: 1, name: "Family" },
  { _id: 2, name: "Outdoor" },
  { _id: 3, name: "Single Player" },
  { _id: 4, name: "Adult" },
  { _id: 5, name: "Kids" }
];

const gameGenres = [
  { _id: 1, name: "Euro" },
  { _id: 2, name: "Abstract" },
  { _id: 3, name: "Ameritrash" }
];

class GameForm extends React.Component {
  state = {
    title: "",
    description: "",
    duration: 0,
    price: 0,
    players: "",
    featured: false,
    tags: [], //contains only ids of the tag
    genre: undefined
  };

  handleOnChange = e =>
    this.setState({
      [e.target.name]:
        e.target.type === "number"
          ? parseInt(e.target.value, 10)
          : e.target.value
    });

  handleChecked = e => this.setState({ [e.target.name]: e.target.checked });

  toggleTag = tag =>
    this.state.tags.includes(tag._id)
      ? this.setState({
          tags: this.state.tags.filter(id => id !== tag._id)
        })
      : this.setState({ tags: [...this.state.tags, tag._id] });

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  handleRadioChanged = id => this.setState({ genre: id });

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
        <div className="inline field">
          <input
            type="checkbox"
            name="featured"
            checked={this.state.featured}
            onChange={this.handleChecked}
          />
          <label htmlFor="featured"> Featured ?</label>
        </div>
        <div className="ui divider" />
        <div className="field">
          <label htmlFor="">Tags</label>
          {gameTags.map(tag => (
            <div className="inline field" key={`tag_${tag.name}`}>
              <input
                type="checkbox"
                name={`tag_${tag.name}`}
                checked={() => this.state.tags.include(tag.name)}
                onChange={() => this.toggleTag(tag)}
              />
              <label htmlFor={`tag_${tag.name}`}>{tag.name}</label>
            </div>
          ))}
        </div>
        <div className="ui divider" />
        <div className="field">
          <label htmlFor="">Genres</label>
          {gameGenres.map(genre => (
            <div className="inline field" key={`genre-${genre._id}`}>
              <input
                type="radio"
                name="genre"
                checked={this.state.genre === genre._id}
                onChange={() => this.handleRadioChanged(genre._id)}
              />
              <label htmlFor={`genre-${genre._id}`}>{genre.name}</label>
            </div>
          ))}
        </div>
        <div className="ui divider" />
        <button className="ui button" type="submit">
          Create
        </button>
      </form>
    );
  }
}

export default GameForm;
