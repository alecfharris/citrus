import React from "react";
import PropTypes from "prop-types";
import StyledCreate from "./style.js";

const Creation = ({ text }) => <StyledCreate>{text}</StyledCreate>;

Creation.propTypes = {
  text: PropTypes.string
};

export default Creation;
