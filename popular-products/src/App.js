import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import ProductList from "./components/ProductList";
import products from "./data";

import "./App.css";

class App extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    this.setState({ products });
  }

  render() {
    return (
      <div className="App">
        <div className="main ui text container">
          <h1 className="ui dividing centered header">Popular Products</h1>
          <div className="content">
            <ProductList products={this.state.products} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
