import React from "react";
import PropTypes from "prop-types";
import StyledRecipe from "./style.js";

const Recipe = ({ text }) => <StyledRecipe>{text}</StyledRecipe>;

Recipe.propTypes = {
  text: PropTypes.string
};

export default Recipe;
