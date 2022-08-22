import { createSlice } from "@reduxjs/toolkit";
import * as API from "../api";
import { featuredMovieMapper, popularMoviesMapper } from "../utils/requestMapper";

const initialState = {
  featuredMovie: {},
  popularMovies: null,
};

export const apiMovies = createSlice({
  name: "apiMovies",
  initialState,
  reducers: {
    getFeaturedMovie: (state, action) => {
      state.featuredMovie = action.payload;
    },
    getPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
  },
});

export const { getFeaturedMovie, getPopularMovies } = apiMovies.actions;

export const getFeaturedMovieRequest = () => async (dispatch) => {
  const { data } = await API.getFeaturedMovie();
  const featureMovie = data.results[0]
  const mappedFeatureMovie = featuredMovieMapper(featureMovie);
  dispatch(getFeaturedMovie(mappedFeatureMovie));
};

export const getPopularMoviesRequest = () => async (dispatch) => {
  const { data } = await API.getPopularMovies();
  const popularMovies = data.results
  const mappedPopularMovies = popularMoviesMapper(popularMovies);
  dispatch(getPopularMovies(mappedPopularMovies));
};

export default apiMovies.reducer;
