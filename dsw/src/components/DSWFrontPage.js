import React from "react";
import { Segment, Header } from "semantic-ui-react";
import DSWDesc from "./DSWDesc";

const DSWFrontPage = () => (
  <Segment style={{ height: "530px" }}>
    <Header as="h1" style={{ color: "#0063ad" }} textAlign="center">
      Rolta Data Science Workbench
    </Header>
    <p style={{ fontSize: "22px", margin: "40px 0" }}>
      Accelerate data science from exploration to production using fast, easy,
      secure and self service user interface for enterprise
    </p>
    <DSWDesc />
  </Segment>
);

export default DSWFrontPage;
