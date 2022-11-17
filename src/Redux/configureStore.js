import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './Rockets/Rockets';
import dragonsReducer from './Dragons/DragonsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    dragons: dragonsReducer,
  },
});

export default store;
