/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getDragons = createAsyncThunk('dragons/getDragons', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/dragons');
  const dragons = response.data.map((dragon) => ({
    id: dragon.id,
    name: dragon.name,
    type: dragon.type,
    image: dragon.flickr_images[0],
  }));
  return dragons;
});

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState: {
    loading: false,
    dragons: [],
    error: '',
  },
  reducers: {
    reservedDragons(state, action) {
      const newState = state.dragons.map((dragon) => {
        if (dragon.id === action.payload) {
          return { ...dragon, reserved: !dragon.reserved };
        }
        return dragon;
      });
      return {
        ...state,
        dragons: newState,
      };
    },
  },
  extraReducers: {
    [getDragons.pending]: (state) => {
      state.status = 'loading';
    },
    [getDragons.fulfilled]: (state, action) => {
      state.status = 'success';
      state.dragons = action.payload;
    },
    [getDragons.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export const { action, reservedDragons } = dragonsSlice.actions;

export default dragonsSlice.reducer;
