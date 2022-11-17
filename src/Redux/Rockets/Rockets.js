/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/rockets');
  const rockets = response.data.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    description: rocket.description,
    image: rocket.flickr_images[0],
    reserved: false,
  }));
  return rockets;
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    status: null,
  },
  reducers: {
    reservedRockets(state, action) {
      const newState = state.rockets.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: !rocket.reserved };
        }
        return rocket;
      });
      return {
        ...state,
        rockets: newState,
      };
    },
  },
  extraReducers: {
    [getRockets.pending]: (state) => {
      state.status = 'loading';
    },
    [getRockets.fulfilled]: (state, action) => {
      state.status = 'success';
      state.rockets = action.payload;
    },
    [getRockets.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export const { action, reservedRockets } = rocketsSlice.actions;

export default rocketsSlice.reducer;
