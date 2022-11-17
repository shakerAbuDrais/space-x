import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDragons } from '../Redux/Dragons/DragonsSlice';
import './Dragons.css';

function Dragon() {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons.dragons);

  useEffect(() => {
    if (dragons.length === 0) {
      dispatch(getDragons());
    }
  }, [dispatch, dragons]);
  const dragonList = dragons.map((dragons) => (
    <dragons
      key={dragons.id}
      id={dragons.id}
      name={dragons.name}
      type={dragons.type}
    />
  ));
  return (
    <ul className="dragon-container">
      {dragonList}
    </ul>
  );
}

export default Dragon;
