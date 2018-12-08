import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Topic from "./Topic";
import data from "./data";

class Topics extends Component {
  render() {
    const { match } = this.props;

    return (
      <div>
        <h1>TOPICS</h1>
        <ul>
          {data.map(({ name, id }) => (
            <li key={id}>
              <Link to={`${match.url}/${id}`}>{name}</Link>
            </li>
          ))}
        </ul>
        <hr />
        <Route path={`${match.path}/:topicId`} component={Topic} />
      </div>
    );
  }
}

export default Topics;
