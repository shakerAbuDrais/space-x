import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getMissions = createAsyncThunk('missions/getMissions', async () => {
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
        // eslint-disable-next-line
        state.missions = temp;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMissions.pending, (state) => {
      // eslint-disable-next-line
      state.loading = true;
    });
    builder.addCase(getMissions.fulfilled, (state, action) => {
      // eslint-disable-next-line
      state.loading = false;
      // eslint-disable-next-line
      state.missions = action.payload;
    });
    builder.addCase(getMissions.rejected, (state, action) => {
      // eslint-disable-next-line
      state.loading = false;
      // eslint-disable-next-line
      state.missions = [];
      // eslint-disable-next-line
      state.error = action.error.message;
    });
  },
});

export const { joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
