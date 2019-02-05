import React, { Component } from "react";
import Axios from "axios";

class Post extends Component {
  state = {
    post: null
  };

  componentDidMount() {
    let id = this.props.match.params.postId;
    Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
      response => this.setState({ post: response.data })
    );
  }
  render() {
    const postDetail = this.state.post ? (
      <div className="post">
        <h4 className="center">{this.state.post.title}</h4>
        <p className="card-body">{this.state.post.body}</p>
      </div>
    ) : (
      <div className="center">Loading Post...</div>
    );

    return <div className="container">{postDetail}</div>;
  }
}

export default Post;
