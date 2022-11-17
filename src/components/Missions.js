import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getMissions from '../Redux/Missions/Missions';
import Mission from './Mission';

const Missions = () => {
  const missionsList = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (missionsList.length === 0) {
      dispatch(getMissions());
    }
  });
  console.log(missionsList);

  return (
    <div>
      {missionsList.map((mission) => (
        <Mission
          key={mission.mission_id}
          mission_id={mission.mission_id}
          missionName={mission.mission_name}
          description={mission.description}
        />
      ))}
    </div>
  );
};

export default Missions;
