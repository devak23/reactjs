import React, { Component } from "react";
import PropTypes from "prop-types";
import Post from "./comment";

export default class CommentBox extends Component {
  state = {
    data: {
      comments: this.props.comments
    }
  };

  render() {
    const { data } = this.state;
    console.log(data.comments);
    return (
      <div className="">
        {data.comments.map(post => (
          <Post id={post.id} content={post.data} user={post.user} />
        ))}
      </div>
    );
  }
}

CommentBox.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired
};
