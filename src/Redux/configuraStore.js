import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './Missions/Missions';

const store = configureStore({
  reducer: {
    missions: missionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
