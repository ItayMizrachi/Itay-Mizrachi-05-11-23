// src/features/tempUnit/tempUnitSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("tempUnit") || "C";

export const tempUnitSlice = createSlice({
  name: "tempUnit",
  initialState,
  reducers: {
    toggleTempUnit: (state) => {
      const newTempUnit = state === "C" ? "F" : "C";
      localStorage.setItem("tempUnit", newTempUnit);
      return newTempUnit;
    },
  },
});

export const { toggleTempUnit } = tempUnitSlice.actions;

export default tempUnitSlice.reducer;