import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './Rockets/Rockets';
import dragonsReducer from './Dragons/Dragons';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    dragons: dragonsReducer,
  },
});

export default store;
