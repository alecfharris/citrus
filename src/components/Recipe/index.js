import React from "react";
import StyledRecipe from "./style.js";
import PropTypes from "prop-types";

Recipe.propTypes = {
  text: PropTypes.string
};

const Recipe = ({ text }) => <StyledRecipe>{text}</StyledRecipe>;

export default Recipe;
