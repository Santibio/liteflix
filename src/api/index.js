import axios from "axios";

const baseURL ="https://api.themoviedb.org/3/movie";
const API_KEY = process.env.REACT_APP_API_KEY;

const API = axios.create({
  baseURL,
});


export const getFeaturedMovie = () => API.get(`/now_playing?api_key=${API_KEY}`);
export const getPopularMovies = () => API.get(`/popular?api_key=${API_KEY}`);

