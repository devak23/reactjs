import React, { Component } from "react";
import ContactsApp from "./components/ContactsApp";
import "./App.css";

export default class App extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    fetch("https://api.randomuser.me/?nat=us,gb&results=50")
      .then(response => response.json())
      .then(parsedRespone =>
        parsedRespone.results.map(user => ({
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          thumbnail: user.picture.thumbnail
        }))
      )
      .then(contacts => this.setState({ contacts }));
  }

  render() {
    return (
      <div className="App">
        <ContactsApp contacts={this.state.contacts} />
      </div>
    );
  }
}
