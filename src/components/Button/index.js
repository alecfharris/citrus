import React from "react";
import StyledButton from "./style.js";
import PropTypes from "prop-types";

const Button = ({ text }) => <StyledButton>{text}</StyledButton>;

Button.propTypes = {
  text: PropTypes.string
};

export default Button;
