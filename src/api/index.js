import axios from "axios";

const baseURL ="https://api.themoviedb.org/3/movie";
const API_KEY = "6f26fd536dd6192ec8a57e94141f8b20";

const API = axios.create({
  baseURL,
});


export const getFeaturedMovie = () => API.get(`/now_playing?api_key=${API_KEY}`);
export const getPopularMovies = () => API.get(`/popular?api_key=${API_KEY}`);

