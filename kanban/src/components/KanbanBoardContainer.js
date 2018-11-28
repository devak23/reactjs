import React, { Component } from "react";
import KanbanBoard from "./KanbanBoard";

const API_URL = "http://kanbanapi.pro-react.com";
const API_HEADERS = {
  "Content-Type": "application/json",
  Authorization: "someAuth"
};

class KanbanBoardContainer extends Component {
  componentDidMount() {
    fetch(API_URL + "/cards", { headers: API_HEADERS })
      .then(response => response.json())
      .then(data => this.setState({ cards: data }))
      .catch(err => console.log("Error fetching and parsing data", err));
  }

  state = { cards: [] };
  render() {
    return <KanbanBoard cards={this.state.cards} />;
  }
}

export default KanbanBoardContainer;
