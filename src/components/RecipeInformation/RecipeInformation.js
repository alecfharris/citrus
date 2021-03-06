import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledRecipe,
  styles,
  withStyles,
  Chip,
} from './RecipeInformation.styles';
import RecipeIngredient from '../RecipeIngredient/RecipeIngredient';
import RecipeInstruction from '../RecipeInstruction/RecipeInstructions';

function RecipeView(props) {
  const {
    title,
    classes,
    image,
    instructions,
    ingredients,
    readyIn,
    originalUrl,
    creditText,
    dietaryRestrictions,
  } = props;

  const {
    vegetarian,
    vegan,
    glutenFree,
    dairyFree,
    veryHealthy,
    cheap,
    popular,
    sustainable,
    lowFodmap,
    ketogenic,
    whole30,
  } = dietaryRestrictions;

  return ingredients ? (
    <StyledRecipe>
      <div className={classes.title}> {title} </div>
      <div className={classes.details}>
        <div className={classes.table}>
          <div className={classes.info}>
            {vegetarian && <Chip label="Vegetarian" className={classes.chip} />}
            {vegan && <Chip label="Vegan" className={classes.chip} />}
            {glutenFree && (
              <Chip label="Gluten Free" className={classes.chip} />
            )}
            {dairyFree && <Chip label="Dairy Free" className={classes.chip} />}
            {veryHealthy && (
              <Chip label="Very Healthy" className={classes.chip} />
            )}
            {cheap && <Chip label="Cheap" className={classes.chip} />}
            {popular && <Chip label="Popular" className={classes.chip} />}
            {sustainable && (
              <Chip label="Sustainable" className={classes.chip} />
            )}
            {lowFodmap && <Chip label="Low FODMAP" className={classes.chip} />}
            {ketogenic && <Chip label="Ketogenic" className={classes.chip} />}
            {whole30 && <Chip label="Whole 30" className={classes.chip} />}
          </div>
          <div className={classes.info}>Ready in: {readyIn} Minutes </div>
          <div className={classes.info}> | </div>
          <div className={classes.info}>
            Credit: <a href={originalUrl}>{creditText}</a>
          </div>
        </div>
      </div>
      <div>
        <img className={classes.image} src={image} alt={title} />
      </div>
      <div>
        {ingredients.map(ingredient => (
          <RecipeIngredient status="red" title={ingredient.originalString} />
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
  image: PropTypes.string,
  instructions: PropTypes.string,
  ingredients: PropTypes.array,
  readyIn: PropTypes.string,
  originalUrl: PropTypes.string,
  creditText: PropTypes.string,
  dietaryRestrictions: PropTypes.object,
};

export default withStyles(styles)(RecipeView);
