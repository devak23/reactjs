import React, { Component } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../../config";
import "./Home.css";
import HeroImage from "../elements/HeroImage/HeroImage";
import SearchBar from "../elements/SearchBar/SearchBar";
import FourColGrid from "../elements/FourColGrid/FourColGrid";
// import MovieThumb from "../elements/MovieThumb/MovieThumb";
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

  render() {
    const heroImage = this.state.heroImage;
    return (
      <div className="rmdb-home">
        <div>
          {heroImage && (
            <HeroImage
              image={`${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${heroImage.backdrop_path}`}
              title={heroImage.original_title}
              text={heroImage.overview}
            />
          )}
          <SearchBar />
        </div>
        <FourColGrid />
        <Spinner />
        <LoadMoreBtn />
      </div>
    );
  }
}

export default Home;
