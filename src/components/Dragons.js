import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDragons } from '../Redux/Dragons/DragonsSlice';
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
        <li key={dragon.id} className="dragon-container">
          <img src={dragon.image} alt="" style={{ height: 200 }} />
          <div className="dragon-info">
            <h3>{dragon.name}</h3>
            <span>{dragon.type}</span>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Dragons;
