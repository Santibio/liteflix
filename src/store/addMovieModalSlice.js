import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const addMovieModalSlice = createSlice({
  name: "addMovie",
  initialState,
  reducers: {
    openModal: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    }
  },
});

// Action creators are generated for each case reducer function
export const { openModal, closeModal } = addMovieModalSlice.actions;

export default addMovieModalSlice.reducer;
