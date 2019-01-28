import React from "react";
import StyledWelcome from "./style.js";
import PropTypes from "prop-types";

Welcome.propTypes = {
  text: PropTypes.string
};

const Welcome = ({ text }) => <StyledWelcome>{text}</StyledWelcome>;

export default Welcome;
