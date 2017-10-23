import React from "react";
import { Grid } from "semantic-ui-react";
import DSWFrontPage from "./DSWFrontPage";
import TagCloud from "./TagCould";
import DonutChart from "./DonutChart";

const DSWPage = () => (
  <Grid>
    <Grid.Column width={11}>
      <DSWFrontPage />
    </Grid.Column>
    <Grid.Column width={5}>
      <div style={{ margin: "0 10px 0 0" }}>
        <TagCloud />
        <DonutChart />
      </div>
    </Grid.Column>
  </Grid>
);

export default DSWPage;
