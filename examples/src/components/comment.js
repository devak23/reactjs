import React from "react";
import PropTypes from "prop-types";

class Comment extends React.Component {
  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.user}
          <span className="commentComponent">{this.props.content}</span>
        </h2>
      </div>
    );
  }
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
};

export default Comment;
