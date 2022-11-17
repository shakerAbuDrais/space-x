import React from 'react';
import { useSelector } from 'react-redux';
import './MyProfile.css';

const Myprofile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  const dragons = useSelector((state) => state.dragons.dragons);
  const reservedDragons = dragons.filter((dragon) => dragon.reserved);
  // const missions = useSelector((state) => state.missions.missions);
  // const reservedMissions = missions.filter((mission) => mission.reserved);

  return (
    <div className="all-items">
      <div className="missions-p">
        <h2>My Rockets</h2>
        <ul className="render-ul">
          {reservedRockets.map((rocket) => (
            <li key={rocket.id}>
              {rocket.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="rockets-p">
        <h2>My Missions</h2>
        <ul className="render-ul">
          {reservedRockets.map((rocket) => (
            <li key={rocket.id}>
              {rocket.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="dragons-p">
        <h2>My Dragons</h2>
        <ul className="render-ul">
          {reservedDragons.map((dragon) => (
            <li key={dragon.id}>
              {dragon.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Myprofile;
