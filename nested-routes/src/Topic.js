import React, { Component } from "react";

class Topic extends Component {
  render() {
    const { match } = this.props;
    console.log("url = ", match.url);
    console.log("path = ", match.path);

    return <h1>TOPIC</h1>;
  }
}

export default Topic;
