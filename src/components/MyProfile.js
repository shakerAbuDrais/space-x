import React from 'react';
import { useSelector } from 'react-redux';

const Myprofile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div>
      <h2>My Missions</h2>
      <ul>
        {reservedRockets.map((rocket) => (
          <li key={rocket.id}>
            {rocket.name}
          </li>
        ))}
      </ul>

      <h2>My Rockets</h2>
      <ul>
        {reservedRockets.map((rocket) => (
          <li key={rocket.id}>
            {rocket.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Myprofile;
