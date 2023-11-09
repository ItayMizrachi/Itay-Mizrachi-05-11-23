// store.js
import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "../features/cities/citySlice";

export const store = configureStore({
  reducer: {
    city: cityReducer,
  },
});

export default store;