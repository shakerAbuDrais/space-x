import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Badge, Button } from 'react-bootstrap';
import { getMissions, reservedMissions } from '../Redux/Missions/Missions';
import './Missions.css';

const Missions = () => {
  const missionsList = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (missionsList.length === 0) {
      dispatch(getMissions());
    }
  });

  return (
    <div className="missions_conteiner">
      <div className="missions_item">
        <div className="mission_name mission_bold">Mission</div>
        <div className="mission_description mission_bold">Description</div>
        <div className="mission_status mission_bold">Status</div>
        <div className="mission_btns mission_bold" />
      </div>
      {missionsList.map((mission) => (
        <div className="missions_item" key={mission.mission_id}>
          <div className="mission_name mission_bold">{mission.mission_name}</div>
          <div className="mission_description">{mission.description}</div>
          <div className="mission_status">
            <Badge
              className={mission.reserved ? 'notActive_mark' : 'active_mark'}
            >
              {mission.reserved ? 'Active Member' : 'Not a Member'}
            </Badge>
            {mission.type}
          </div>
          <div className="mission_btns">
            <Button
              variant={mission.reserved ? 'leave_btn' : 'join_btn'}
              onClick={() => dispatch(reservedMissions(mission.mission_id))}
              type="button"
            >
              { mission.reserved ? 'Leave Mission' : 'Join Mission' }
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Missions;
