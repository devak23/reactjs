import React, { Component } from "react";
import H1BGraph from "./H1BGraph";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="" />
        <p>Hello World</p>
        <H1BGraph url="data/h1bs.csv" />
      </div>
    );
  }
}

export default App;
