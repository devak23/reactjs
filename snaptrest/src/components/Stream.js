import React, { Component } from "react";
import SnapkiteStreamClient from "snapkite-stream-client";
import StreamTweet from "./StreamTweet";
import Header from "./Header";

class Stream extends Component {
  state = {
    tweet: null
  };

  componentDidMount() {
    SnapkiteStreamClient.initializeStream(this.handleNewTweet);
  }

  componentWillUnmount() {
    SnapkiteStreamClient.destroyStream();
  }

  handleNewTweet = tweet => {
    this.setState({ tweet });
  };

  render() {
    const { tweet } = this.state;
    const { onAddTweet } = this.props;
    const headerText = "Waiting for public photos from Twitter...";

    return (
      <div>
        {!tweet && <Header text={headerText} />}
        {tweet && <StreamTweet tweet={tweet} onAddTweet={onAddTweet} />}
      </div>
    );
  }
}

export default Stream;
