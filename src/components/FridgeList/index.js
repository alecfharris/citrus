import React from 'react';
import PropTypes from 'prop-types';
import StyledList from './style.js';

const Fridgelist = ({ text }) => <StyledList>{text}</StyledList>;

Fridgelist.propTypes = {
  text: PropTypes.string,
};

export default Fridgelist;
