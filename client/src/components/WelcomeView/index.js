import React from 'react';
import PropTypes from 'prop-types';
import StyledWelcome from './style.js';

const WelcomeView = ({ text }) => <StyledWelcome>{text}</StyledWelcome>;

WelcomeView.propTypes = {
  text: PropTypes.string,
};

export default WelcomeView;
