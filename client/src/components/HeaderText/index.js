import React from "react";
import StyledHeader from "./style.js";
import PropTypes from "prop-types";

const HeaderText = ({ text }) => <StyledHeader>{text}</StyledHeader>;

HeaderText.propTypes = {
  text: PropTypes.string
};

export default HeaderText;
