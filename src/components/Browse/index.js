import React from "react";
import PropTypes from "prop-types";
import StyledBrowse from "./style.js";

const Browse = ({ text }) => <StyledBrowse>{{ text }}</StyledBrowse>;

Browse.propTypes = {
  text: PropTypes.string
};

export default Browse;
