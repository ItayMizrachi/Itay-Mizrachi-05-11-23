import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cityReducer from "../features/cities/citySlice";
import userLocationReducer from "../features/userLocation/userLocationSlice";
import tempUnitReducer from "../features/tempUnit/tempUnitSlice";

const rootReducer = combineReducers({
  city: cityReducer,
  userLocation: userLocationReducer,
  tempUnit: tempUnitReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;