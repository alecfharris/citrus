import React from 'react';
import PropTypes from 'prop-types';

const status = {
  green: '#9BC995',
  yellow: '#FED766',
  red: '#FE4A49',
};

const Icon = props => (
  <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="10" fill={status[props.status]} />
  </svg>
);

Icon.propTypes = {
  status: PropTypes.string,
};

export default Icon;
