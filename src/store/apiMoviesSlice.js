import { createSlice } from "@reduxjs/toolkit";
import * as API from "../api";

const initialState = {
  featuredMovie: {},
  popularMovies: [],
};

export const apiMovies = createSlice({
  name: "apiMovies",
  initialState,
  reducers: {
    getFeaturedMovie: (state, action) => {
      console.log("action: ", action.payload);
      state.featuredMovie = action.payload;
    },
    getPopularMovies: (state, action) => {
      console.log("action: ", action);
      state.popularMovies = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { getFeaturedMovie, getPopularMovies } = apiMovies.actions;

export const getFeaturedMovieRequest = () => async (dispatch) => {
  const { data } = await API.getFeaturedMovie();
  const featureMovie = data.results[0]
  dispatch(getFeaturedMovie(featureMovie));
};

export default apiMovies.reducer;
