import React, { Component } from "react";
import VerticalMenu from "./components/VerticalMenu";
import TopNavigation from "./components/TopNavigation";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <TopNavigation />
        <VerticalMenu />
      </div>
    );
  }
}

export default App;
