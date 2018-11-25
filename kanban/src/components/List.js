import React from "react";
import Card from "./Card";

class List extends React.Component {
  render() {
    let cards = this.props.cards.map(c => {
      return (
        <Card
          id={c.id}
          title={c.title}
          description={c.description}
          tasks={c.tasks}
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
