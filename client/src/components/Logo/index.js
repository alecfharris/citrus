import React from 'react';
import PropTypes from 'prop-types';
import StyledLogo from './style.js';
import LogoImg from './citrus-logo.svg';

const Logo = ({ alt }) => (
  <StyledLogo>
    <img src={LogoImg} alt={alt} />
  </StyledLogo>
);

Logo.propTypes = {
  alt: PropTypes.string,
};

export default Logo;
