import React from 'react';
// import PropTypes from 'prop-types';
import StyledLogo from './style.js';
import LogoImg from './citrus-logo.svg';

const Logo = () => (
  <StyledLogo>
    <img src={LogoImg} alt="citrus" />
  </StyledLogo>
);

// Logo.propTypes = {
//   alt: PropTypes.string,
// };

export default Logo;
