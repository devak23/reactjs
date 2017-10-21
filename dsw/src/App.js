import React from "react";
import PropTypes from "prop-types";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router-dom";
import VerticalMenu from "./components/VerticalMenu";
import TopNavigation from "./components/TopNavigation";
import DSWPage from "./components/DSWPage";
import AlgorithmsHomePage from "./components/AlgorithmsHomePage";
import DSWFooter from "./components/DSWFooter";

const App = ({ location }) => (
  <div>
    <Grid>
      <Grid.Row>
        <TopNavigation />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width="1">
          <VerticalMenu />
        </Grid.Column>
        <Grid.Column width="15">
          <div>
            <Route location={location} exact path="/" component={DSWPage} />
            <Route
              location={location}
              exact
              path="/algorithms"
              component={AlgorithmsHomePage}
            />
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <DSWFooter />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};
export default App;
