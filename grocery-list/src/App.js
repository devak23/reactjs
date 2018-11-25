import React, { Component } from "react";
import GroceryList from "./components/GroceryList";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <h3>Grocery List</h3>
        <GroceryList />
      </div>
    );
  }
}

export default App;
