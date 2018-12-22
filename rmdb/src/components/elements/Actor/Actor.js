import React from "react";
import { IMAGE_BASE_URL } from "../../../config";
import "./Actor.css";

const POSTER_SIZE = "w154";

const Actor = props => {
  const { actor } = props;
  if (!actor) {
    return <div>No actor to render!</div>;
  }
  const actorImage = `${IMAGE_BASE_URL}/${POSTER_SIZE}${actor.profile_path}`;

  return (
    <div className="rmdb-actor">
      <img src={actor.profile_path ? actorImage : "./images/no_image.jpg"} alt="actorThumb" />
      <div className="rmdb-actor-name">{actor.name}</div>
      <div className="rmdb-actor-character">{actor.character}</div>
    </div>
  );
};

export default Actor;
