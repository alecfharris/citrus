import React from 'react';
import PropTypes from 'prop-types';
import StyledHeader from './WelcomeText.styles';

const WelcomeText = ({ text }) => (
  <StyledHeader>{`Welcome, ${text}`}</StyledHeader>
);

WelcomeText.propTypes = {
  text: PropTypes.string,
};

export default WelcomeText;
