import { createSlice } from "@reduxjs/toolkit";

const localTheme = localStorage.getItem("theme") || "dark";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: localTheme,
  },
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value === "dark" ? "light" : "dark";
      localStorage.setItem("theme", state.value);
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
