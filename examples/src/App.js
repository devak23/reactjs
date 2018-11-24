/* eslint linebreak-style: ["error", "unix"] */
import React from "react";
import "semantic-ui-css/semantic.min.css";
import Banner from "./components/banner";
import Counter from "./components/counter";
import LoginPage from "./components/login/loginPage";
import AddressWidget from "./components/addressWidget/addressPage";
import Comment from "./components/comment";
import CommentBox from "./components/comment-box";
import Post from "./components/post";

export default class App extends React.Component {
  log = data => window.console.log(data);

  render() {
    return (
      <div className="ui page grid">
        <div className="three column row">
          <div className="column">
            <Banner
              message={
                "There are two important days in your life. The day when you were born and the day when you know why."
              }
              color={"orange"}
              author={"Mark Twain"}
            />
          </div>
          <div className="column">
            <Counter count={150} />
          </div>
          <div className="column">
            <LoginPage />
          </div>
        </div>
        <div className="three column row">
          <hr className="stylish" />
        </div>
        <div className="row">
          <AddressWidget />
        </div>
        <div className="three column row">
          <div className="column">
            <Post id={1} content=" said: This is a post!" user="Mark" />
            <Comment id={2} content=" said: This is a comment!" user="Philip" />
          </div>
          <div className="column" />
          <div className="column">
            <CommentBox onCommentSubmit={this.log} />
          </div>
        </div>
      </div>
    );
  }
}
