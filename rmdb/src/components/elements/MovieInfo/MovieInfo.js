import React, { Component } from "react";
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from "../../../config";
import FontAwesome from "react-fontawesome";
import MovieThumb from "../MovieThumb/MovieThumb";
import "./MovieInfo.css";

const MovieInfo = props => {
  const { movie, directors } = props;
  if (!movie) {
    return <div>No movie to render!</div>;
  }
  return (
    <div
      className="rmdb-movieinfo"
      style={{
        background: movie.backdrop_path ? `url(${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${movie.backdrop_path})` : "black"
      }}
    >
      <div className="rmdb-movieinfo-content">
        <div className="rmdb-movieinfo-thumb">
          <MovieThumb
            clickable={false}
            image={
              movie.poster_path ? `${IMAGE_BASE_URL}/${POSTER_SIZE}/${movie.poster_path}` : "../images/no_image.jpg"
            }
          />
        </div>
        <div className="rmdb-movieinfo-text">
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>
          <h3>IMDB RATING</h3>
          <div className="rmdb-rating">
            <meter min="0" max="100" optimum="100" low="40" high="70" value={movie.vote_average * 10} />
            <p className="rmdb-score">{movie.vote_average}</p>
          </div>
          {directors && <h3>DIRECTOR{props.directors.length > 1 ? "S" : null}</h3>}
          {directors &&
            directors.map((dir, i) => (
              <p className="rmdb-director" key={i}>
                {dir.name}
              </p>
            ))}
        </div>
        <FontAwesome className="fa-film" name="film" size="5x" />
      </div>
    </div>
  );
};

export default MovieInfo;
