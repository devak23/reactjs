import React from "react";
import PropTypes from "prop-types";
import ReactImageFallback from "react-image-fallback";

// import { gameTags, gameGenres } from "../data";

class GameForm extends React.Component {
  state = {
    title: "",
    description: "",
    duration: 0,
    price: 0,
    players: "",
    featured: false,
    tags: [], //contains only ids of the tag
    genre: undefined,
    publisher: 0,
    thumbnail: ""
  };

  handleTextChange = e => this.setState({ [e.target.name]: e.target.value });

  handleNumberChange = e =>
    this.setState({ [e.target.name]: parseInt(e.target.value, 10) });

  handleChecked = e => this.setState({ [e.target.name]: e.target.checked });

  handleToggleTag = tag =>
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
        <div className="ui grid">
          <div className="twelve wide column">
            <div className="field">
              <label htmlFor="title">Game Title</label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Enter full game title"
                value={this.state.title}
                onChange={this.handleTextChange}
              />
            </div>
            <div className="field">
              <label htmlFor="description">Game Description</label>
              <textarea
                type="text"
                name="description"
                id="description"
                value={this.state.description}
                onChange={this.handleTextChange}
              />
            </div>
          </div>
          <div className="four wide column">
            <ReactImageFallback
              src={this.state.thumbnail}
              fallbackImage="http://via.placeholder.com/250x250"
              alt="Thumbnail"
              className="ui image"
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="thumbnail">Thumbnail</label>
          <input
            type="text"
            name="thumbnail"
            id="thumbnail"
            placeholder="Url here..."
            value={this.state.thumbnail}
            onChange={this.handleTextChange}
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
              onChange={this.handleNumberChange}
            />
          </div>
          <div className="field">
            <label htmlFor="duration">Duration (in mins) </label>
            <input
              type="number"
              name="duration"
              id="duration"
              value={this.state.duration}
              onChange={this.handleNumberChange}
            />
          </div>
          <div className="field">
            <label htmlFor="players">Players</label>
            <input
              type="text"
              name="players"
              id="players"
              value={this.state.players}
              onChange={this.handleTextChange}
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
        {/* <div className="field">
          <label htmlFor="">Tags</label>
          {gameTags.map(tag => (
            <div className="inline field" key={`tag_${tag.name}`}>
              <input
                type="checkbox"
                name={`tag_${tag.name}`}
                checked={() => this.state.tags.include(tag.name)}
                onChange={() => this.handleToggleTag(tag)}
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
        <div className="ui divider" /> */}

        <div className="field">
          <label htmlFor="publisher">Publishers</label>
          <select
            name="publisher"
            id="publisher"
            value={this.state.publisher}
            onChange={this.handleNumberChange}
          >
            <option key={0} value={0}>
              Please select a publisher
            </option>
            {this.props.publishers.map(option => (
              <option value={option._id} key={option._id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>

        <button className="ui button" type="submit">
          Create
        </button>
      </form>
    );
  }
}

GameForm.propTypes = {
  publishers: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

export default GameForm;
