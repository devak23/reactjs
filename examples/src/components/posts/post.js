import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Post extends Component {
  state = {
    data: {
      user: this.props.user,
      content: this.props.content,
      id: this.props.id
    }
  };

  render() {
    const { data } = this.state;
    return (
      <div className="post">
        <h5 className="postAuthor" id={data.id}>
          {data.user}:<span className="postBody">{data.content}</span>
        </h5>
      </div>
    );
  }
}

Post.propTypes = {
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};
