import React, { Component } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Topics from "./Topics";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ width: 1000, margin: "0 auto" }}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/topics" component={Topics} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
