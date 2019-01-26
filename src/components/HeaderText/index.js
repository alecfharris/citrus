import React from "react";
import PropTypes from "prop-types";
import StyledHeader from "./style.js";

const HeaderText = ({ text }) => <StyledHeader>{text}</StyledHeader>;

HeaderText.propTypes = {
  text: PropTypes.string
};

export default HeaderText;
