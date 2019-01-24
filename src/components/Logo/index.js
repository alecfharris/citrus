import React from "react";
import StyledLogo from "./style.js";
import PropTypes from "prop-types";

const Logo = ({ text }) => <StyledLogo>{text}</StyledLogo>;

Logo.propTypes = {
  text: PropTypes.string
};

export default Logo;
