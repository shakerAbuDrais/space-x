import React from 'react';
import PropTypes from 'prop-types';

function Mission({ missionName, description }) {
  return (
    <div>
      <div>{missionName}</div>
      <div>{description}</div>
      <div>Status</div>
      <button type="button">Join Mission</button>
    </div>
  );
}

Mission.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
