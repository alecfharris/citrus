import React from "react";
import PropTypes from "prop-types";
import StyledInfo from "./style.js";

const FridgeInfo = ({ text }) => <StyledInfo>{text}</StyledInfo>;

FridgeInfo.propTypes = {
  text: PropTypes.string
};

export default FridgeInfo;
