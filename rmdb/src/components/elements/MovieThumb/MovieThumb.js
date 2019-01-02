import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./MovieThumb.css";

const MovieThumb = props => {
  const image = <img src={props.image} alt="movie thumb" />;
  const { movieId, movieName } = props;
  return (
    <div className="rmdb-moviethumb">
      {!props.clickable ? image : <Link to={{ pathname: `/${movieId}`, movieName: `${movieName}` }}>{image}</Link>}
    </div>
  );
};

MovieThumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  movieName: PropTypes.string
};

export default MovieThumb;
