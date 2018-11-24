import React from "react";
import PropTypes from "prop-types";

export default class Comment extends React.Component {
  state = {
    data: {
      user: this.props.user,
      content: this.props.content,
      id: this.props.id
    }
  };

  render() {
    let { data } = this.state;
    return (
      <div className="comment">
        <h2 className="commentAuthor" id={data.id}>
          {data.user}
          <span className="commentComponent">{data.content}</span>
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
