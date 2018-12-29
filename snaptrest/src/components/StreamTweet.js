import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Tweet from "./Tweet";

class StreamTweet extends Component {
  componentDidMount() {
    const comp = ReactDOM.findDOMNode(this);
    console.log("Dom component: ", comp);
    this.setState({
      numberOfCharactersIsIncreasing: true,
      headerText: "Latest public photos from Twitter"
    });
    window.snapterest = {
      numberOfReceivedTweets: 1,
      numberofDisplayedTweets: 1
    };
  }

  render() {
    const headerText = this.state;
    const { tweet, onAddTweet } = this.props;

    return (
      <section>
        <Header text={headerText} />
        <Tweet tweet={tweet} onImageClick={onAddTweet} />
      </section>
    );
  }
}

export default StreamTweet;
