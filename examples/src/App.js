import React from "react";
import "semantic-ui-css/semantic.min.css";
import Banner from "./components/banner";
import Counter from "./components/counter";
import LoginPage from "./components/login/loginPage";
import AddressWidget from "./components/addressWidget/addressPage";
import Comment from "./components/posts/comment";
import Post from "./components/posts/post";
import CommentBox from "./components/posts/comment-box";
import CommentsData from "./components/posts/comment-data";
import HelloWithStyle from "./components/helloWithStyle";
import SearchBox from "./components/searchbox";
import ParentContainer from "./components/parent-child/parent-container";
import AnimButton from "./components/cssbutton/button";
import Badge from "./components/badge/Badge";
import ColorCard from "./components/colorCard/ColorCard";

export default class App extends React.Component {
  log = data => window.console.log(data);

  greet = message => `<strong>${message}</strong>`;

  render() {
    return (
      <div>
        <Banner
          message={
            "There are two important days in your life. The day when you were born and the day when you know why."
          }
          color={"orange"}
          author={"Mark Twain"}
        />
        <Counter count={150} />
        <LoginPage />
        <AnimButton />
        <AddressWidget />
        <Post id={1} content=" said: This is a post!" user="Mark" />
        <Comment id={2} content=" said: This is a comment!" user="Philip" />
        <CommentBox comments={CommentsData.comments} onCommentSubmit={this.log} />
        <HelloWithStyle />
        <SearchBox />
        <ParentContainer greet={this.greet} />
        <Badge
          image="https://avatars2.githubusercontent.com/u/17371975?s=460&v=4"
          name="Abhay Kulkarni"
          username="devak23"
        />
        <ColorCard color="#F02F02" />
        <ColorCard color="#67A67A" />
        <div style={{ clear: "both" }} />
      </div>
    );
  }
}
