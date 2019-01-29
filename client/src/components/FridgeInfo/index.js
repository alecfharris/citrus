import React from "react";
import StyledInfo from "./style.js";
import PropTypes from "prop-types";

const FridgeInfo = ({ text }) => <StyledInfo>{text}</StyledInfo>;

FridgeInfo.propTypes = {
  text: PropTypes.string
};

export default FridgeInfo;
