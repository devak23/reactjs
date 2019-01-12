import React, { Component } from "react";
import { API_URL, API_KEY } from "../../config";
import Navigation from "../elements/Navigation/Navigation";
import MovieInfo from "../elements/MovieInfo/MovieInfo";
import MovieInfoBar from "../elements/MovieInfoBar/MovieInfoBar";
import FourColGrid from "../elements/FourColGrid/FourColGrid";
import Actor from "../elements/Actor/Actor";
import Spinner from "../elements/Spinner/Spinner";
import "./Movie.css";

class Movie extends Component {
  state = {
    movie: null,
    actors: null,
    directors: [],
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    // fetch movie
    const endPoint = `${API_URL}/movie/${
      this.props.match.params.movieId
    }?api_key=${API_KEY}&language=en-US`;
    this.fetchMovie(endPoint);
  }

  fetchMovie = endPoint => {
    fetch(endPoint)
      .then(response => response.json())
      .then(movie => {
        if (movie.status_code) {
          this.setState({ loading: false });
        } else {
          this.setState({ movie }, () => {
            // fetch actors
            const endPoint = `${API_URL}/movie/${
              this.props.match.params.movieId
            }/credits?api_key=${API_KEY}`;
            fetch(endPoint)
              .then(response => response.json())
              .then(result => {
                const directors = result.crew.filter(
                  member => member.job === "Director"
                );
                this.setState({ actors: result.cast, directors });
                this.setState({ loading: false });
              })
              .catch(err => console.error(err));
          });
        }
      })
      .catch(err => console.error(err));
  };

  render() {
    const { movie, directors, actors } = this.state;
    return (
      <div className="rmdb-movie">
        {movie && <Navigation movie={movie.title} />}
        {movie && <MovieInfo movie={movie} directors={directors} />}
        {movie && (
          <MovieInfoBar
            time={movie.runtime}
            budget={movie.budget}
            revenue={movie.revenue}
          />
        )}
        <div className="rmdb-movie-grid">
          {actors && (
            <FourColGrid header={"Actors"} loading={this.state.loading}>
              {actors.map((actor, i) => (
                <Actor key={i} actor={actor} />
              ))}
            </FourColGrid>
          )}
        </div>
        {!this.state.loading && !actors && <h2>No Movie Found!</h2>}
        {this.state.loading && <Spinner />}
      </div>
    );
  }
}

export default Movie;
