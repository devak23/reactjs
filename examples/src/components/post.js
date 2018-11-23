import React from "react";
import PropTypes from "prop-types";

class Post extends React.Component {
  render() {
    return (
      <div className="post">
        <h5 className="postAuthor" id={this.props.id}>
          {this.props.user}:
          <span className="postBody">{this.props.content}</span>
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

export default Post;
