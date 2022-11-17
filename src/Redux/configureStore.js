import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './Rockets/Rockets';
import dragonsReducer from './Dragons/DragonsSlice';
import missionsReducer from './Missions/Missions';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    dragons: dragonsReducer,
    missions: missionsReducer,
  },
});

export default store;
