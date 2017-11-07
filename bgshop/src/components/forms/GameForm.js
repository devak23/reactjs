import React from "react";
import PropTypes from "prop-types";
import ReactImageFallback from "react-image-fallback";

class GameForm extends React.Component {
  state = {
    title: "",
    description: "",
    duration: 0,
    price: 0,
    players: "",
    featured: false,
    publisher: 0,
    thumbnail: ""
  };

  handleTextChange = e => this.setState({ [e.target.name]: e.target.value });

  handleNumberChange = e =>
    this.setState({ [e.target.name]: parseInt(e.target.value, 10) });

  handleChecked = e => this.setState({ [e.target.name]: e.target.checked });

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  handleRadioChanged = id => this.setState({ genre: id });

  handleCancelForm = e => this.props.showGameForm(false);

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="ui grid">
          <div className="twelve wide column">
            <div className="field">
              <label className="required" htmlFor="title">
                Game Title
              </label>
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
            <div className="field">
              <label className="required" htmlFor="publisher">
                Publisher
              </label>
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

        <br />
        <div className="field">
          <label className="required" htmlFor="thumbnail">
            Thumbnail
          </label>
          <input
            type="text"
            name="thumbnail"
            id="thumbnail"
            placeholder="Image Url here..."
            value={this.state.thumbnail}
            onChange={this.handleTextChange}
          />
        </div>

        <div className="three fields">
          <div className="field">
            <label className="required" htmlFor="price">
              Price (in cents)
            </label>
            <input
              type="number"
              name="price"
              id="price"
              value={this.state.price}
              onChange={this.handleNumberChange}
            />
          </div>
          <div className="field">
            <label className="required" htmlFor="duration">
              Duration (in mins){" "}
            </label>
            <input
              type="number"
              name="duration"
              id="duration"
              value={this.state.duration}
              onChange={this.handleNumberChange}
            />
          </div>
          <div className="field">
            <label className="required" htmlFor="players">
              Players
            </label>
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
          <label className="required" htmlFor="featured">
            {" "}
            Featured ?
          </label>
        </div>
        <div className="ui divider" />
        <div className="ui fluid buttons">
          <button className="ui positive button" type="submit">
            <i className="icon check mark" />
            Create Game
          </button>
          <div className="or" />
          <button
            className="ui button"
            type="button"
            onClick={this.handleCancelForm}
          >
            <i className="icon remove" />
            Cancel
          </button>
        </div>
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
  ).isRequired,
  showGameForm: PropTypes.func.isRequired
};

GameForm.defaultProps = {
  publishers: [],
  showForm: false
};

export default GameForm;
