import React from 'react';
import PropTypes from 'prop-types';
import StyledLogo from './style.js';

const Logo = ({ text }) => <StyledLogo>{text}</StyledLogo>;

Logo.propTypes = {
  text: PropTypes.string,
};

export default Logo;
