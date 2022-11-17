/* eslint-disable react/jsx-no-undef */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Badge, Button } from 'react-bootstrap';
import { getDragons, reservedDragons } from '../Redux/Dragons/Dragons';
import './Dragons.css';

const Dragons = () => {
  const dragons = useSelector((state) => state.dragons.dragons);
  const dispatch = useDispatch();
  useEffect(() => {
    if (dragons.length === 0) {
      dispatch(getDragons());
    }
  });

  return (
    <div>
      {dragons.map((dragon) => (
        <div key={dragon.id} className="dragon-container">
          <img className="image" src={dragon.image} alt={dragon.image} />
          <div className="dragon-info">
            <h3>{dragon.name}</h3>
            <span>{dragon.type}</span>
            <p id={dragon.id}>
              <Badge className="big">
                {dragon.reserved ? 'Reserved' : ''}
              </Badge>
              {dragon.type}
            </p>
            <Button
              variant={dragon.reserved ? 'outline-dark' : 'primary'}
              onClick={() => dispatch(reservedDragons(dragon.id))}
              type="button"
            >
              { dragon.reserved ? 'Cancel Reservation' : 'Reserve Dragon'}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dragons;
