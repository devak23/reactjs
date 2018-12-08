import React from "react";
import topics from "./data";

const Resource = ({ match }) => {
  const topic = topics
    .find(({ id }) => id === match.params.topicId)
    .resources.find(({ id }) => id === match.params.resId);

  return (
    <div>
      <h3>{topic.name}</h3>
      <p>{topic.description}</p>
      <a href={topic.url}>More info</a>
    </div>
  );
};

export default Resource;
