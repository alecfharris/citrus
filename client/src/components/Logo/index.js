import React from "react";
import StyledLogo from "./style.js";
import PropTypes from "prop-types";
import LogoImg from "./citrus-logo.svg";

const Logo = () => <StyledLogo><img src={LogoImg} alt="citrus"></img></StyledLogo>;

Logo.propTypes = {
  text: PropTypes.string
};

export default Logo;