import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import VerticalMenu from "./components/VerticalMenu";
import TopNavigation from "./components/TopNavigation";
import DSWFrontPage from "./components/DSWFrontPage";
import DSWFooter from "./components/DSWFooter";
import TagCloud from "./components/TagCould";
import DonutChart from "./components/DonutChart";

class App extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <TopNavigation />
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="1">
              <VerticalMenu />
            </Grid.Column>
            <Grid.Column width="11">
              <DSWFrontPage />
            </Grid.Column>
            <Grid.Column width="4" style={{ margin: "0 -20px" }}>
              <Grid.Row>
                <TagCloud />
              </Grid.Row>
              <Grid.Row style={{ margin: "10px 0" }}>
                <DonutChart />
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <DSWFooter />
      </div>
    );
  }
}

export default App;
