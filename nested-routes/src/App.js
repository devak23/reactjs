import React, {Component} from "react";
import {BrowserRouter, Link, Route} from "react-router-dom";
import Topics from "./Topics";
import Home from "./Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="left">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
            </ul>
          </div>

            <div className="middle">
              <Route exact path="/" component={Home}/>
            </div>
            <div className="right">
              <Route path="/topics" component={Topics}/>
            </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
