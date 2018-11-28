import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";

class List extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.object),
    taskCallbacks: PropTypes.shape({
      addTask: PropTypes.func.isRequired,
      deleteTask: PropTypes.func.isRequired,
      toggleTask: PropTypes.func.isRequired
    }).isRequired
  };

  render() {
    let cards = this.props.cards.map(c => {
      return (
        <Card
          id={c.id}
          key={c.id}
          title={c.title}
          description={c.description}
          color={c.color}
          tasks={c.tasks}
          taskCallbacks={this.props.taskCallbacks}
        />
      );
    });

    return (
      <div className="list">
        <h1>{this.props.title}</h1>
        {cards}
      </div>
    );
  }
}

export default List;
