import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const getDragons = createAsyncThunk('dragons/getDragons', async () => {
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
  extraReducers: (builder) => {
    builder.addCase(getDragons.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(getDragons.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      dragons: action.payload,
    }));
    builder.addCase(getDragons.rejected, (state, action) => ({
      ...state,
      loading: false,
      dragons: [],
      error: action.error.message,
    }));
  },
});

export default dragonsSlice.reducer;
export { getDragons };
