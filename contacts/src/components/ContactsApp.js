import React from "react";
import SearchBar from "./SearchBar";
import ContactList from "./ContactList";
import PropTypes from "prop-types";
import "./ContactsApp.css";
import LoadingHOC from "./HOC/LoadingHOC";

class ContactsApp extends React.Component {
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
    ).isRequired,
    loadingTime: PropTypes.string
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
        <p>Load time: {this.props.loadingTime} seconds</p>
      </div>
    );
  }
}

//export default LoadingHOC("contacts")(ContactsApp);
export default LoadingHOC("contacts")(ContactsApp);
