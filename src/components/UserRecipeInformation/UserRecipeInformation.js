import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledRecipe,
  styles,
  withStyles,
  Chip,
} from './UserRecipeInformation.styles';
import UserRecipeIngredient from '../UserRecipeIngredient/UserRecipeIngredient';
import RecipeInstruction from '../RecipeInstruction/RecipeInstructions';

function RecipeView(props) {
  const { title, classes, instructions, ingredients } = props;

  return ingredients ? (
    <StyledRecipe>
      <div className={classes.title}> {title} </div>
      <div className={classes.details}>
        <div className={classes.table} />
      </div>
      <div>
        {ingredients.map(ingredient => (
          <UserRecipeIngredient
            status="red"
            title={ingredient.ingredientName}
            quantity={ingredient.quantity}
            unit={ingredient.unit}
          />
        ))}
      </div>
      <hr className={classes.line} />
      <h3>Instructions</h3>
      <RecipeInstruction text={instructions} />
    </StyledRecipe>
  ) : (
    <div />
  );
}

RecipeView.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.string,
  // image: PropTypes.string,
  instructions: PropTypes.string,
  ingredients: PropTypes.array,
  // readyIn: PropTypes.string,
  // originalUrl: PropTypes.string,
  // creditText: PropTypes.string,
  // dietaryRestrictions: PropTypes.object,
};

export default withStyles(styles)(RecipeView);
