import React, {Component} from "react";
import {BrowserRouter, Link, Route} from "react-router-dom";
import {Home, Widget, Topics} from "./pages";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="one">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
              <li>
                <Link to="/widget">Widget</Link>
              </li>
            </ul>
          </div>

            <div className="two">
              <Route exact path="/" component={Home}/>
            </div>

            <div className="three">
              <Route path="/topics" component={Topics}/>
            </div>

          <div className="three">
            <Route path="/widget" component={Widget}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
