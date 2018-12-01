import React, { Component } from "react";
import KanbanBoard from "./KanbanBoard";
import update from "react-addons-update";
import API from "./api";

class KanbanBoardContainer extends Component {
  state = { cards: [] };

  componentDidMount() {
    API.getTasks().then(data => this.setState({ cards: data }));
  }
  addTask = (cardId, taskName) => {
    //find the index of the cardID
    const cardIndex = this.state.cards.findIndex(card => card.id === cardId);
    // create a new component with task
    const newTask = { id: Date.now(), name: taskName };
    // create a new state
    const newState = update(this.state.cards, {
      [cardIndex]: {
        tasks: { $push: [newTask] }
      }
    });
    // update the component state
    this.setState({ cards: newState });
    // invoke the API to the server to add the newly added task
    API.addTask(cardId, newTask);
  };

  deleteTask = (cardId, taskId, taskIndex) => {
    // Find the index of the card
    const cardIndex = this.state.cards.findIndex(card => card.id === cardId);
    // Create a new object without the task
    let newState = update(this.state.cards, {
      [cardIndex]: {
        tasks: { $splice: [[taskIndex, 1]] }
      }
    });
    // set the component state to the new state
    this.setState({ cards: newState });
    // update the server with new changes
    API.deleteTask(cardId, taskId);
  };

  toggleTask = (cardId, taskId, taskIndex) => {
    // find the card index
    const cardIndex = this.state.cards.findIndex(card => card.id === cardId);
    // create a new state
    let newDoneValue;
    const newState = update(this.state.cards, {
      [cardIndex]: {
        tasks: {
          [taskIndex]: {
            done: {
              $apply: done => {
                newDoneValue = !done;
                return newDoneValue;
              }
            }
          }
        }
      }
    });
    // set the new state on the component
    this.setState({ cards: newState });
    // update the server with new changes
    API.toggleTask(cardId, taskId, newDoneValue);
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
