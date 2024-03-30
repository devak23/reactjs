import React from "react";
import { Route, Link } from "react-router-dom";
import Resource from "./Resource";
import topics from "../data/resources";

const Topic = ({ match }) => {
  const topic = topics.find(topic => topic.id === match.params.topicId);

  return (
    <div>
      <h2>{topic.name}</h2>
      <p>{topic.description}</p>
      <ul>
        {topic.resources.map(res => (
          <li key={res.id}>
            <Link to={`${match.url}/${res.id}`}>{res.name}</Link>
          </li>
        ))}
      </ul>
      <Route path={`${match.path}/:resId`} component={Resource} />
    </div>
  );
};

export default Topic;
