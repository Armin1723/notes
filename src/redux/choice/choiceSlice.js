import { createSlice } from "@reduxjs/toolkit";

export const choiceSlice = createSlice({
  name: "choice",
  initialState: {
    value: 0,
  },
  reducers: {
    toggleChoice: (state) => {
      state.value = ( state.value + 1 ) % 5;
    },
  },
});

export const { toggleChoice } = choiceSlice.actions;

export default choiceSlice.reducer;