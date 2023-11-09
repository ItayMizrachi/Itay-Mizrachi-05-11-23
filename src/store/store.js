import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cityReducer from "../features/cities/citySlice";
import userLocationReducer from "../features/userLocation/userLocationSlice";

const rootReducer = combineReducers({
  city: cityReducer,
  userLocation: userLocationReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;