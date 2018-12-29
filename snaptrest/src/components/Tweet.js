import React from "react";

const Tweet = ({ tweet, onAddTweet }) => {
  return (
    <div>
      {tweet.message}
      <img src="someimage" alt="some image" onClick={onAddTweet} />;
    </div>
  );
};

export default Tweet;
