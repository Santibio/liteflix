import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userMovies: null,
};

export const userMovies = createSlice({
  name: "userMovies",
  initialState,
  reducers: {
    getuserMovies: (state) => {
      state.userMovies = JSON.parse(localStorage.getItem("userMovies")) || [];
    },
  },
});


export const { getuserMovies } = userMovies.actions;

export default userMovies.reducer;
