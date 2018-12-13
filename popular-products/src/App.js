import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import ProductList from "./components/ProductList";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main ui text container">
          <h1 className="ui dividing centered header">Popular Products</h1>
          <div className="content">
            <ProductList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
