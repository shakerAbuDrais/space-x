import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../Redux/Missions/Missions';

const Missions = () => {
  const missionsList = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (missionsList.length === 0) {
      dispatch(getMissions());
    }
  });

  return (
    <div>
      {missionsList.map((mission) => (
        <div
          key={mission.mission_id}
        >
          <h3>{mission.mission_name}</h3>
          <p>{mission.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Missions;
