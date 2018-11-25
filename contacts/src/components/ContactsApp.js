import React from "react";
import SearchBar from "./SearchBar";
import ContactList from "./ContactList";
import PropTypes from "prop-types";
import "./ContactsApp.css";

export default class ContactsApp extends React.Component {
  state = {
    filterText: ""
  };

  static protoTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        thumbnail: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
      })
    ).isRequired
  };

  handleUserInput = searchTerms => this.setState({ filterText: searchTerms });

  render() {
    return (
      <div className="contactApp">
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput}
        />
        <ContactList
          contacts={this.props.contacts}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}
