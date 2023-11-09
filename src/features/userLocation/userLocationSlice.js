import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: null,
  error: null,
};

export const userLocationSlice = createSlice({
  name: 'userLocation',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
      state.error = null;
    },
    setLocationError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setLocation, setLocationError } = userLocationSlice.actions;

export const selectUserLocation = (state) => state.userLocation.location;
export const selectLocationError = (state) => state.userLocation.error;

export default userLocationSlice.reducer;