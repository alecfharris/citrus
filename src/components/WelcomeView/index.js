import React from "react";
import StyledWelcome from "./style.js";
import PropTypes from "prop-types";

WelcomeView.propTypes = {
  text: PropTypes.string
};

const WelcomeView = ({ text }) => <StyledWelcome>{text}</StyledWelcome>;

export default WelcomeView;
