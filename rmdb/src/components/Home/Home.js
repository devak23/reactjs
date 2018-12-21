import React, { Component } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../../config";
import "./Home.css";
import HeroImage from "../elements/HeroImage/HeroImage";
import SearchBar from "../elements/SearchBar/SearchBar";
import FourColGrid from "../elements/FourColGrid/FourColGrid";
import MovieThumb from "../elements/MovieThumb/MovieThumb";
import LoadMoreBtn from "../elements/LoadMoreBtn/LoadMoreBtn";
import Spinner from "../elements/Spinner/Spinner";

class Home extends Component {
  state = {
    movies: [],
    searchTerm: "",
    currentPage: 0,
    totalPages: 0,
    loading: false,
    heroImage: null
  };

  loadMoreItems = () => {
    let endPoint = "";
    this.setState({ loading: true });
    if (!this.state.searchTerm) {
      endPoint = `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage + 1}`;
    } else {
      endPoint = `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${this.state.searchTerm}&page=${this
        .state.currentPage + 1}`;
    }
    this.fetchMovies(endPoint);
  };

  componentDidMount() {
    this.setState({ loading: true });
    const endPoint = `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    this.fetchMovies(endPoint);
  }

  searchItems = searchTerm => {
    let endPoint = "";
    this.setState({
      movies: [],
      loading: true,
      searchTerm
    });

    if (searchTerm) {
      endPoint = `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
    } else {
      endPoint = `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage + 1}`;
    }
    this.fetchMovies(endPoint);
  };

  fetchMovies = endPoint => {
    fetch(endPoint)
      .then(response => response.json())
      .then(data =>
        this.setState({
          movies: [...this.state.movies, ...data.results],
          heroImage: this.state.heroImage || data.results[0],
          loading: false,
          currentPage: data.page,
          totalPages: data.total_pages
        })
      )
      .catch(error => console.error(error));
  };

  // handleClickMovieThumb = movieId => {
  //   let selectedMovie = this.state.movies.filter(movie => movie.id === movieId);
  //   console.log("selectedMovie = ", selectedMovie);
  //   this.setState({ heroImage: selectedMovie[0] });
  // };

  render() {
    const heroImage = this.state.heroImage;
    return (
      <div className="rmdb-home">
        {heroImage && (
          <HeroImage
            image={`${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${heroImage.backdrop_path}`}
            title={heroImage.original_title}
            text={heroImage.overview}
          />
        )}
        <SearchBar callback={this.searchItems} />

        <div className="rmdb-home-grid">
          <FourColGrid
            header={this.state.searchTerm ? `Search Result for - ${this.state.searchTerm}` : "Popular Movies"}
            loading={this.state.loading}
          >
            {this.state.movies.map((movie, i) => {
              return (
                <MovieThumb
                  key={i}
                  clickable={true}
                  image={
                    movie.poster_path
                      ? `${IMAGE_BASE_URL}/${POSTER_SIZE}/${movie.poster_path}`
                      : "./images/no_image.jpg"
                  }
                  movieId={movie.id}
                  movieName={movie.original_title}
                />
              );
            })}
          </FourColGrid>
        </div>

        {this.state.loading && <Spinner />}
        {this.state.currentPage < this.state.totalPages && !this.state.loading && (
          <LoadMoreBtn
            text={this.state.currentPage === 1 ? "Load More ..." : "... keep going!"}
            onClick={this.loadMoreItems}
          />
        )}
      </div>
    );
  }
}

export default Home;
