import React, { Component } from "react";
import SnapkiteStreamClient from "snapkite-stream-client";
import StreamTweet from "./StreamTweet";
import Header from "./Header";

class Stream extends Component {
  state = {
    tweet: null
  };

  componentDidMount() {
    console.log("starting snapkite client");

    SnapkiteStreamClient.initializeStream(this.handleNewTweet, {
      port: 4000
    });
  }

  componentWillUnmount() {
    console.log("destroying snapkite client");

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
        <p className="header">Stream</p>
        {!tweet && <Header text={headerText} />}
        {tweet && <StreamTweet tweet={tweet} onAddTweet={onAddTweet} />}
      </div>
    );
  }
}

export default Stream;
