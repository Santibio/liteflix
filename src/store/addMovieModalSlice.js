import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const addMovieModalSlice = createSlice({
  name: "addMovie",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = addMovieModalSlice.actions;

export default addMovieModalSlice.reducer;
