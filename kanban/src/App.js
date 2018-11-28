import React, { Component } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import KanbanBoardContainer from "./components/KanbanBoardContainer";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <KanbanBoardContainer />
      </div>
    );
  }
}

export default App;
