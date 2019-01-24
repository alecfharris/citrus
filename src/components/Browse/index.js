import React from "react";
import StyledBrowse from "./style.js";
import PropTypes from "prop-types";

Browse.propTypes = {
  text: PropTypes.string
};

const Browse = ({ text }) => <StyledBrowse>{{ text }}</StyledBrowse>;

export default Browse;
