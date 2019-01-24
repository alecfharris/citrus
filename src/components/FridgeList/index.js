import React from "react";
import StyledList from "./style.js";
import PropTypes from "prop-types";

Fridgelist.propTypes = {
  text: PropTypes.string
};

const Fridgelist = ({ text }) => <StyledList>{text}</StyledList>;

export default Fridgelist;
