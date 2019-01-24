import React from "react";
import StyledCreate from "./style.js";
import PropTypes from "prop-types";

Creation.propTypes = {
  text: PropTypes.string
};

const Creation = ({ text }) => <StyledCreate>{text}</StyledCreate>;

export default Creation;
