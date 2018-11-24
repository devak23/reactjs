import React, { Component } from "react";
import PropTypes from "prop-types";

export default class CommentBox extends Component {
  state = {
    data: {
      user: "",
      content: ""
    }
  };

  handleOnChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.onCommentSubmit(this.state.data);
  };

  render() {
    let { data } = this.state;
    return (
      <form className="ui form" onSubmit={this.handleOnSubmit}>
        <input
          type="text"
          onChange={this.handleOnChange}
          placeholder="Your name"
          name="user"
          value={data.user}
        />
        <input
          type="text"
          onChange={this.handleOnChange}
          placeholder="Thoughts?"
          name="content"
          value={data.content}
        />
        <button className="ui orange button" type="submit">
          Post
        </button>
      </form>
    );
  }
}

CommentBox.propTypes = {
  onCommentSubmit: PropTypes.func.isRequired,
  content: PropTypes.string
};
