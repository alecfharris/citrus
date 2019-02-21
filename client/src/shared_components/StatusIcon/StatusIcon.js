import React from 'react';
import PropTypes from 'prop-types';

// TODO: move these to theme provider
const statusColor = {
  green: '#9BC995',
  yellow: '#FED766',
  red: '#FE4A49',
};

const StatusIcon = ({ status }) => (
  <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="10" fill={statusColor[status]} />
  </svg>
);

StatusIcon.propTypes = {
  status: PropTypes.string,
};

export default StatusIcon;
