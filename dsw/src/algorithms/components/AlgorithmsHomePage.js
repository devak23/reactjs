import React from "react";
import { Header, Divider, Grid } from "semantic-ui-react";

import AlgorithmListPage from "./AlgorithmListPage";
import IconDiagnosticService from "../images/icon_DiagnosticService.png";
import IconExploratoryAnalysisService from "../images/icon_ExploratoryAnalysisService.png";
import { genericAlgorithms, advancedAlgorithms } from "./data";

// import NewAlgorithmPage from "./NewAlgorithmPage";

class AlgorithmsHomePage extends React.Component {
  state = {
    data: {
      genericAlgorithms: [],
      advancedAlgorithms: []
    }
  };

  componentDidMount = () =>
    this.setState({
      data: {
        genericAlgorithms,
        advancedAlgorithms
      }
    });

  render() {
    const { data } = this.state;
    return (
      <div>
        <Header as="h3">Types of algorithms</Header>
        <Divider />
        <Grid columns={2}>
          <Grid.Column>
            <AlgorithmListPage
              image={IconDiagnosticService}
              altText="Generic algorithms"
              algorithms={data.genericAlgorithms}
              type="generic"
            />
          </Grid.Column>
          <Grid.Column>
            <AlgorithmListPage
              image={IconExploratoryAnalysisService}
              altText="Advanced algorithms"
              algorithms={data.advancedAlgorithms}
              type="advanced"
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default AlgorithmsHomePage;
