import React from "react";
import ReactDOM from "react-dom";
import { addTweet } from "./App";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("adds tweet to a collection", () => {
  App.state = { tweets: loadTweets() };
  let tweet4 = { id: 4, message: "This is tweet4" };
  addTweet(tweet4);
  expect(Object.keys(App.state.tweets).length).toBe(3);
});

function loadTweets() {
  let tweet1 = { id: 1, message: "This is tweet1" };
  let tweet2 = { id: 2, message: "This is tweet2" };
  let tweet3 = { id: 3, message: "This is tweet3" };
  return { tweet1, tweet2, tweet3 };
}
