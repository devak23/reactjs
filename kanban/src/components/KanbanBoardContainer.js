import React, { Component } from "react";
import KanbanBoard from "./KanbanBoard";
import API from "./api";

class KanbanBoardContainer extends Component {
  state = { cards: [] };

  componentDidMount() {
    this.setState({ cards: API.getTasks() });
  }
  addTask = (cardId, taskName) => {
    console.log(taskName, " invoked for cardId =", cardId);
  };
  deleteTask = (cardId, taskId, taskIndex) => {
    console.log("deleteTask invoked for cardId = ", cardId);
  };
  toggleTask = (cardId, taskId, taskIndex) => {
    console.log("toggleTask invoked fpr cardId = ", cardId);
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
