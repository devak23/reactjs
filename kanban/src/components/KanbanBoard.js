import React from "react";
import List from "./List";
import PropTypes from "prop-types";

class KanbanBoard extends React.Component {
  render() {
    return (
      <div className="app">
        <List
          id="todo"
          title="To Do"
          taskCallbacks={this.props.taskCallbacks}
          cards={this.props.cards.filter(card => card.status === "todo")}
        />
        <List
          id="in-progress"
          title="In Progress"
          taskCallbacks={this.props.taskCallbacks}
          cards={this.props.cards.filter(card => card.status === "in-progress")}
        />
        <List
          id="done"
          title="Done"
          taskCallbacks={this.props.taskCallbacks}
          cards={this.props.cards.filter(card => card.status === "done")}
        />
      </div>
    );
  }

  static propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object),
    taskCallbacks: PropTypes.shape({
      addTask: PropTypes.func.isRequired,
      deleteTask: PropTypes.func.isRequired,
      toggleTask: PropTypes.func.isRequired
    }).isRequired
  };
}

export default KanbanBoard;
