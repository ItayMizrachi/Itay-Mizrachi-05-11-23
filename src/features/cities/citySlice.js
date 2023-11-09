import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cityData: null,
  error: null,
};

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCityData: (state, action) => {
      state.cityData = action.payload;
      state.error = null;
    },
    setCityError: (state, action) => {
      state.error = action.payload;
    },
    clearCityData: (state) => {
      state.cityData = null;
      state.error = null;
    },
  },
});

export const { setCityData, setCityError, clearCityData } = citySlice.actions;

export const selectCityData = (state) => state.city.cityData;
export const selectCityError = (state) => state.city.error;

export default citySlice.reducer;
