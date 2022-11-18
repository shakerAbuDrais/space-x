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
    reservedMissions(state, action) {
      const newState = state.missions.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, reserved: !mission.reserved };
        }
        return mission;
      });
      return {
        ...state,
        missions: newState,
      };
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

export const { action, reservedMissions } = missionSlice.actions;
export default missionSlice.reducer;
