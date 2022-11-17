/* eslint-disable react/prop-types */
/* eslint-disable react/no-typos */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDragons } from '../Redux/Dragons/DragonsSlice';
import './Dragons.css';

// const dragons = (props) => {
//   const {
//     id, name, type, images,
//   } = props;
//   Dragons.PropTypes = {
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     images: PropTypes.arrayOf(PropTypes.string).isRequired,
//   };
const Dragons = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons.dragons);
  console.log(dragons);

  useEffect(() => {
    if (dragons.length === 0) {
      dispatch(getDragons());
    }
  }, [dispatch, dragons]);

  return (
    <div>
      {dragons.map((dragon) => (
        <li key={dragon.id} className="dragon-container">
          <img src={dragon.images} alt="" style={{ height: 200 }} />
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
