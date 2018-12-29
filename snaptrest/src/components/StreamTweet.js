import React, { Component } from "react";
import Header from "./Header";
import Tweet from "./Tweet";

class StreamTweet extends Component {
  state = { headerText: null };
  render() {
    const headerText = this.state;
    const { tweet, onAddTweet } = this.props;

    return (
      <div>
        <Header text={headerText} />
        <Tweet tweet={tweet} onImageClick={onAddTweet} />
      </div>
    );
  }
}

export default StreamTweet;
