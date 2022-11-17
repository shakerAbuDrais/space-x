import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMissions = createAsyncThunk('missions/getMissions', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions');
  const missions = response.data.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
  }));
  return missions;
});

const missionSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    status: null,
  },
  reducers: {
    joinMission(state, action) {
      state.missions.unshift(action.payload);
    },
    leaveMission(state, action) {
      if (action.payload) {
        const temp = state.missions.filter((mission) => mission.id !== action.payload);
        const newState = state;
        newState.missions = temp;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMissions.pending, (state) => {
      const newState = state;
      newState.loading = true;
    });
    builder.addCase(getMissions.fulfilled, (state, action) => {
      const newState = state;
      newState.missions = action.payload;
    });
    builder.addCase(getMissions.rejected, (state, action) => {
      const newState = state;
      newState.loading = false;
      newState.missions = [];
      newState.error = action.error.message;
    });
  },
});

export const { joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
