// Configuration for TMDB
// To se the latest configuration fetch it from https://api.themoviedb.org/3/configuration?api_key=019e8f375549e0bbd4a4191862ebc88f
// ex: https://api.themoviedb.org/3/movie/550?api_key=485d8ccd4dda0f484c76079127022a76

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "485d8ccd4dda0f484c76079127022a76";

//Read Access Token:
// eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9
//   .eyJhdWQiOiI0ODVkOGNjZDRkZGEwZjQ4NGM3NjA3OTEyNzAyMmE3NiIsInN1YiI6IjVjMWFlMmQ5OTI1MTQxNGIwMTUzMzQ0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ
//   .oSY47RrgHj52Dij2QkT_SMJ9AbM5VTPcKlkAY_Rcj2E;

// Images
// An image URL looks like this example:
// http://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p";

//Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = "w1280";

// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = "w500";

export { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE };
