import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./App.css";

class App extends Component {
  state = {
    items: [
      { id: 1, name: "milk" },
      { id: 2, name: "yogurt" },
      { id: 3, name: "eggs" },
      { id: 4, name: "cheese" },
      { id: 5, name: "bread" }
    ]
  };

  handleChange = e => {
    if (e.key === "Enter") {
      const newItem = { id: Date.now(), name: e.target.value };
      const newItems = this.state.items.concat(newItem);
      e.target.value = "";
      this.setState({ items: newItems });
    }
  };

  handleRemove = i => {
    let newItems = this.state.items;
    newItems.splice(i, 1);
    this.setState({ items: newItems });
  };

  render() {
    const shoppingItems = this.state.items.map((item, i) => (
      <div className="item" key={item.id} onClick={() => this.handleRemove(i)}>
        {item.name}
      </div>
    ));
    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={300}
          transitionAppear={true}
          transitionAppearTimeout={300}
          transitionLeaveTimeout={300}
        >
          {shoppingItems}
        </ReactCSSTransitionGroup>
        <input
          type="text"
          value={this.state.newItem}
          onKeyDown={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
