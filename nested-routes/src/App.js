import React, { Component } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import data from "./data";

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

function Home() {
  return <h1>HOME</h1>;
}

function Topics() {
  return (
    <div>
      <h1>TOPICS</h1>
      <ul>
        {data.map(({ name, id }) => (
          <li key={id}>
            <Link to={`/topics/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <Route path={`/topics/:topicId`} component={Topic} />
    </div>
  );
}

function Topic() {
  return <h1>TOPIC</h1>;
}

export default App;
