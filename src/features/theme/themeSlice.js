import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("selectedTheme") || "dracula";

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => action.payload,
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;