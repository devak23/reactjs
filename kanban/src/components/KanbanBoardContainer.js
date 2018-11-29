import React, { Component } from "react";
import KanbanBoard from "./KanbanBoard";

const API_URL = "http://kanbanapi.pro-react.com";
const API_HEADERS = {
  "Content-Type": "application/json",
  Authorization: "someAuth"
};

class KanbanBoardContainer extends Component {
  state = { cards: [] };

  componentDidMount() {
    fetch(API_URL + "/cards", { headers: API_HEADERS })
      .then(response => response.json())
      .then(data => this.setState({ cards: data }))
      .catch(err => console.log("Error fetching and parsing data", err));
  }

  addTask = (cardId, taskName) => {
    console.log("adding ", taskName, "to ", cardId);
  };

  deleteTask = (cardId, taskId, index) => {
    console.log("deleting ", taskId, "from ", cardId);
  };

  toggleTask = (cardId, taskId, taskIndex) => {
    console.log("toggling ", taskId, " for ", cardId);
  };

  render() {
    return (
      <KanbanBoard
        cards={this.state.cards}
        taskCallbacks={{
          toggleTask: this.toggleTask,
          addTask: this.addTask,
          deleteTask: this.deleteTask
        }}
      />
    );
  }
}

export default KanbanBoardContainer;
