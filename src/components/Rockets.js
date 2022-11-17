/* eslint-disable import/no-named-as-default */
import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Badge, Button } from 'react-bootstrap';
import { getRockets, reservedRockets } from '../Redux/Rockets/Rockets';
import './Rockets.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!rockets.length) {
      dispatch(getRockets());
    }
  });

  return (
    <div>
      {rockets.map((rocket) => (
        <div className="main" key={rocket.id}>
          <img className="image" src={rocket.image} alt={rocket.name} />
          <div className="right-section">
            <h2>{rocket.name}</h2>
            <p id={rocket.id}>
              <Badge>
                {rocket.reserved ? 'Reserved' : ''}
              </Badge>
              {rocket.description}
            </p>
            <Button
              variant={rocket.reserved ? 'outline-dark' : 'primary'}
              onClick={() => dispatch(reservedRockets(rocket.id))}
              type="button"
            >
              { rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket' }
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
