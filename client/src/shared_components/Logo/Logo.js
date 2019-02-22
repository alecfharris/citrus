import React from 'react';
import PropTypes from 'prop-types';
import StyledLogo from './Logo.styles';
import LogoImg from './citrusLogo.svg';

const Logo = ({ alt }) => (
  <StyledLogo>
    <img src={LogoImg} alt={alt} />
  </StyledLogo>
);

Logo.propTypes = {
  alt: PropTypes.string,
};

export default Logo;
