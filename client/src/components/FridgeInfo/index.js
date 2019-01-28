import React from "react";
import StyledInfo from "./style.js";
import PropTypes from "prop-types";

FridgeInfo.propTypes = {
  text: PropTypes.string
};

const FridgeInfo = ({ text }) => <StyledInfo>{text}</StyledInfo>;

export default FridgeInfo;
