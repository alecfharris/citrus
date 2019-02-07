import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Divider from '@material-ui/core/Divider';
import StyledRecipe from './style.js';
import RecipeIngredient from '../RecipeIngredient';
import RecipeInstruction from '../RecipeInstruction';

const styles = () => ({
  image: {
    width: '100%',
    maxWidth: 500,
    background: '#FFF',
    borderRadius: '10px',
  },
  line: {
    color: '#c0c0c0',
    width: '75%',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  details: {
    color: '#666',
    padding: '10px',
    display: 'table',
  },
  table: {
    display: 'table-row',
  },
  info: {
    display: 'table-cell',
    padding: '5px',
  },
  a: {
    color: 'red',
  },
});

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
  } = props;
  console.log(readyIn);
  return (
    <StyledRecipe>
      <div className={classes.title}> {title} </div>
      <div className={classes.details}>
        <div className={classes.table}>
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
};

export default withStyles(styles)(RecipeView);
