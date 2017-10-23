import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import AlgorithmListPage from "./AlgorithmListPage";
import NewAlgorithmPage from "./NewAlgorithmPage";

const AlgorithmsHomePage = ({ location }) => (
  <div>
    <p>Types of algorithms</p>
    <Route
      location={location}
      exact
      path="/list"
      component={AlgorithmListPage}
    />
    <Route location={location} exact path="/new" component={NewAlgorithmPage} />
  </div>
);

AlgorithmsHomePage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default AlgorithmsHomePage;
