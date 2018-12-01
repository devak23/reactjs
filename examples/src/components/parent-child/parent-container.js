import React, { Component } from "react";
import ChildContainer from "./child-container";

class ParentContainer extends Component {
  render() {
    return <ChildContainer greet={this.props.greet} />;
  }
}

export default ParentContainer;
