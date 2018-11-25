import React from "react";
import ListItem from "./ListItem";

class GroceryList extends React.Component {
  render() {
    return (
      <ul>
        <ListItem quantity="1">Bread</ListItem>
        <ListItem quantity="2">Milk</ListItem>
        <ListItem quantity="4">Eggs</ListItem>
        <ListItem quantity="6">Cheese</ListItem>
        <ListItem quantity="1">Wine</ListItem>
      </ul>
    );
  }
}

export default GroceryList;
