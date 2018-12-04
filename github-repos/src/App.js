import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Repos from "./Repos";
import RepoDetails from "./RepoDetails";
import "./App.css";

class App extends Component {
  state = {
    route: window.location.hash.substr(1)
  };

  componentDidMount() {
    window.addEventListener("hashchange", () => {
      this.setState({ route: window.location.hash.substr(1) });
    });
  }
  render() {
    return (
      <div className="App">
        <header>App</header>
        <menu>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/repos">Repos</Link>
            </li>
          </ul>
        </menu>

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/repos" component={Repos} />
        <Route exact path="/repos/details/:repoName" component={RepoDetails} />
      </div>
    );
  }
}

export default App;
