import { configureStore } from "@reduxjs/toolkit";

import addMovieModalReducer from "./addMovieModalSlice";
import userMoviesReducer from "./userMoviesSlice";
import apiMoviesReducer from "./apiMoviesSlice";

const store = configureStore({
  reducer: {
    addMovieModal: addMovieModalReducer,
    userMovies: userMoviesReducer,
    apiMovies: apiMoviesReducer,
  },
});

export default store;
