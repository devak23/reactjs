import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ filterText, onUserInput }) => {
  return (
    <input
      type="search"
      placeholder="Search"
      value={filterText}
      onChange={e => onUserInput(e.target.value)}
    />
  );
};

SearchBar.propTypes = {
  onUserInput: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired
};
export default SearchBar;
