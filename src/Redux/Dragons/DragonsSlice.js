import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const getDragons = createAsyncThunk('dragons/GetDragons', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/dragons');
  const data = await response.json();
  const dragons = data.map((dragon) => ({
    id: dragon.id,
    name: dragon.dragon_name,
    type: dragon.type,
    images: dragon.flickr_images,
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
      drgons: action.payload,
    }));
    builder.addCase(getDragons.rejected, (state, action) => ({
      ...state,
      loading: false,
      rockets: [],
      error: action.error.message,
    }));
  },
});

export default dragonsSlice.reducer;
export { getDragons };
