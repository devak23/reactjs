import React from "react";
import "./MovieThumb.css";

const MovieThumb = props => {
  return (
    <div className="rmdb-moviethumb">
      <img src={props.image} alt="movie thumb" />
      <div className="rmdb-moviethumb-title">{props.movieName}</div>
    </div>
  );
};

export default MovieThumb;
