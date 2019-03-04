import React from 'react';
import PropTypes from 'prop-types';
import { StyledInstructions } from './RecipeInstructions.styles';

const RecipeInstructions = ({ text }) => (
  <StyledInstructions>{text}</StyledInstructions>
);

RecipeInstructions.propTypes = {
  text: PropTypes.string,
};

export default RecipeInstructions;
