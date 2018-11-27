import React, { Component } from "react";

class SearchBox extends Component {
  state = {
    searchText: "React Rocks!"
  };

  handleOnChange = e => {
    this.setState({ searchText: e.target.value.substr(0, 5) });
  };

  render() {
    const { searchText } = this.state;
    return (
      <div>
        <label htmlFor="search">Search: </label>
        <input
          id="search"
          type="text"
          value={searchText}
          onChange={this.handleOnChange}
        />
      </div>
    );
  }
}

export default SearchBox;
