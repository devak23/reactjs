import React, { Component } from "react";
import Stream from "./components/Stream";
import Collection from "./components/Collection";
import "./App.css";

class App extends Component {
  state = {
    tweets: {}
  };

  addTweet = tweet => {
    this.setState({ tweets: { ...this.state.tweets, tweet } });
  };

  removeTweet = tweet => {
    let tweets = this.state.tweets.filter(t => t.id !== tweet.id);
    this.setState({ tweets });
  };

  removeAllTweets = () => this.setState({ tweets: {} });

  render() {
    const { removeAllTweets, removeTweet, addTweet } = this;
    return (
      <div className="container-fluid mauto">
        <div className="row">
          <div className="col-md-4 text-center">
            <Stream onAddTweet={addTweet} />
          </div>
          <div className="col-md-8 text-center">
            <Collection
              tweets={this.state.tweets}
              onRemoveTweet={removeTweet}
              onRemoveAllTweets={removeAllTweets}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
