import React from "react";
import PropTypes from "prop-types";
import ReactImageFallback from "react-image-fallback";
import FormInlineMessage from "../helpers/FormInlineMessage";

class GameForm extends React.Component {
  state = {
    data: {
      title: "",
      description: "",
      duration: 0,
      price: 0,
      players: "",
      featured: false,
      publisher: 0,
      thumbnail: ""
    },
    errors: {}
  };

  handleTextChange = e =>
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });

  handleNumberChange = e =>
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: parseInt(e.target.value, 10)
      }
    });

  handleChecked = e =>
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.checked
      }
    });

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.data);
  };

  handleCancelForm = e => this.props.showGameForm(false);

  render() {
    const { data, errors } = this.state;
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="ui grid">
          <div className="twelve wide column">
            <div className={errors.name ? "field error" : "field"}>
              <label className="required" htmlFor="title">
                Game Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Enter full game title"
                value={data.title}
                onChange={this.handleTextChange}
              />
              <FormInlineMessage content={errors.name} type="error" />
            </div>
            <div className={errors.description ? "field error" : "field"}>
              <label htmlFor="description">Game Description</label>
              <textarea
                type="text"
                name="description"
                id="description"
                value={data.description}
                onChange={this.handleTextChange}
              />
              <FormInlineMessage content={errors.description} type="error" />
            </div>
            <div className={errors.publisher ? "field error" : "field"}>
              <label className="required" htmlFor="publisher">
                Publisher
              </label>
              <select
                name="publisher"
                id="publisher"
                value={data.publisher}
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
              <FormInlineMessage content={errors.publisher} type="error" />
            </div>
          </div>
          <div className="four wide column">
            <ReactImageFallback
              src={data.thumbnail}
              fallbackImage="http://via.placeholder.com/250x250"
              alt="Thumbnail"
              className="ui image"
            />
          </div>
        </div>

        <br />
        <div className={errors.thumbnail ? "field error" : "field"}>
          <label className="required" htmlFor="thumbnail">
            Thumbnail
          </label>
          <input
            type="text"
            name="thumbnail"
            id="thumbnail"
            placeholder="Image Url here..."
            value={data.thumbnail}
            onChange={this.handleTextChange}
          />
          <FormInlineMessage content={errors.thumbnail} type="error" />
        </div>

        <div className="three fields">
          <div className={errors.price ? "field error" : "field"}>
            <label className="required" htmlFor="price">
              Price (in cents)
            </label>
            <input
              type="number"
              name="price"
              id="price"
              value={data.price}
              onChange={this.handleNumberChange}
            />
            <FormInlineMessage content={errors.price} type="error" />
          </div>
          <div className={errors.duration ? "field error" : "field"}>
            <label className="required" htmlFor="duration">
              Duration (in mins)
            </label>
            <input
              type="number"
              name="duration"
              id="duration"
              value={data.duration}
              onChange={this.handleNumberChange}
            />
            <FormInlineMessage content={errors.duration} type="error" />
          </div>
          <div className={errors.players ? "field error" : "field"}>
            <label className="required" htmlFor="players">
              Players
            </label>
            <input
              type="text"
              name="players"
              id="players"
              value={data.players}
              onChange={this.handleTextChange}
            />
            <FormInlineMessage content={errors.players} type="error" />
          </div>
        </div>
        <div className={`inline ${errors.featured ? "field error" : "field"}`}>
          <input
            type="checkbox"
            name="featured"
            checked={data.featured}
            onChange={this.handleChecked}
          />
          <label className="required" htmlFor="featured">
            Featured ?
          </label>
          <FormInlineMessage content={errors.featured} type="error" />
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
