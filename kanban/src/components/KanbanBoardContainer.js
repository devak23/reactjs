import React, { Component } from "react";
import KanbanBoard from "./KanbanBoard";
import update from "react-addons-update";
import API from "./api";

class KanbanBoardContainer extends Component {
  state = { cards: [] };

  componentDidMount() {
    API.getTasks().then(data => this.setState({ cards: data }));
  }

  ///////////////////////    ADD TASK      /////////////////////
  addTask = (cardId, taskName) => {
    // Find the index of the card
    let cardIndex = this.state.cards.findIndex(c => c.id === cardId);

    // Create a new task with the given name and temporary Id
    let newTask = { id: Date.now(), name: taskName, done: false };

    // Create new object and push in the array of tasks
    let nextState = update(this.state.cards, {
      [cardIndex]: {
        tasks: { $push: [newTask] }
      }
    });

    // set the component state to the mutated object
    this.setState({ cards: nextState });

    // Call the API to update the task on the server
    API.addTask().then(data => {
      // When the server returns definitive ID used for the newTask, update it on React
      newTask.id = data.id;
      this.setState({ cards: nextState });
    });
  };

  ///////////////////////    DELETE TASK      /////////////////////
  deleteTask = (cardId, taskId, taskIndex) => {
    // find the index of the card
    let cardIndex = this.state.cards.findIndex(card => card.id === cardId);

    // create a new object without the task.
    let nextState = update(this.state.cards, {
      [cardIndex]: {
        tasks: { $splice: [[taskIndex, 1]] }
      }
    });

    // set the component state to the mutated new object
    this.setState({ cards: nextState });

    // call API to remove the task from the server
    API.deleteTask(cardId, taskId);
  };

  ///////////////////////    TOGGLE TASK      /////////////////////
  toggleTask = (cardId, taskId, taskIndex) => {
    // Find the index of the card
    let cardIndex = this.state.cards.findIndex(c => c.id === cardId);
    let newDoneValue;
    // using the $apply command you will change the done value to its opposite
    let nextState = update(this.state.cards, {
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

    //set the component state to the mutated object
    this.setState({ cards: nextState });

    // Call the fetch API to toggle the task on the server
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
