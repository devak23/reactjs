import React from "react";
import ListItem from "./ListItem";

class GroceryList extends React.Component {
  render() {
    return (
      <ul>
        <ListItem quantity="1" name="Bread" />
        <ListItem quantity="2" name="Milk" />
        <ListItem quantity="4" name="Cheese" />
        <ListItem quantity="6" name="Eggs" />
      </ul>
    );
  }
}

export default GroceryList;
