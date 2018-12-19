import React, { Component } from "react";
import "./App.css";
import MyError from "./components/MyError";

class App extends Component {
  state = {};

  componentDidCatch(error, info) {
    console.log(info);
    console.log("error = ", error);

    this.setState({ err: error.message });
  }

  render() {
    return (
      <div className="App">
        <MyError err={this.state.err} />
      </div>
    );
  }
}

export default App;
