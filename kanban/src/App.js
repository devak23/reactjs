import React, { Component } from "react";
import KanbanBoard from "./components/KanbanBoard";
import KanbanData from "./kanban-data";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";

// import "semantic-ui-css/semantic.min.css";

class App extends Component {
  state = {
    cardsList: []
  };

  componentDidMount() {
    this.setState({ cardsList: KanbanData });
  }
  render() {
    return (
      <div className="ui container">
        <KanbanBoard cards={this.state.cardsList} />
      </div>
    );
  }
}

export default App;
