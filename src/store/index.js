import { configureStore } from "@reduxjs/toolkit";

import addMovieModalReducer from "./addMovieModalSlice";

const store = configureStore({
  reducer: {
    addMovieModal: addMovieModalReducer,
  },
});

export default store;
