import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const filtersReducer = slice.reducer;
export const { setFilter } = slice.actions;
