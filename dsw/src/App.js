import React from "react";
import PropTypes from "prop-types";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router-dom";
import VerticalMenu from "./home/components/VerticalMenu";
import TopNavigation from "./home/components/TopNavigation";
import DSWPage from "./home/components/DSWPage";
import AlgorithmsHomePage from "./algorithms/components/AlgorithmsHomePage";
import DatasetsHomePage from "./datasets/components/DatasetsHomePage";
import VisualizeHomePage from "./visualize/components/VisualizeHomePage";
import ModelsHomePage from "./models/components/ModelsHomePage";
import SandboxHomePage from "./sandbox/components/SandboxHomePage";
import DSWFooter from "./home/components/DSWFooter";

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
            <Route
              location={location}
              exact
              path="/datasets"
              component={DatasetsHomePage}
            />
            <Route
              location={location}
              exact
              path="/visualize"
              component={VisualizeHomePage}
            />
            <Route
              location={location}
              exact
              path="/models"
              component={ModelsHomePage}
            />
            <Route
              location={location}
              exact
              path="/sandbox"
              component={SandboxHomePage}
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
