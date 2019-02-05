import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import StyledRecipe from './style.js';
import Image from './food.jpg';
import RecipeIngredient from '../RecipeIngredient';
import RecipeInstruction from '../RecipeInstruction';

const styles = () => ({
  image: {
    width: '100%',
    maxWidth: 360,
    background: '#FFF',
    borderRadius: '10px',
  },
});

function Recipe(props) {
  const { title, alt, classes } = props;
  return (
    <StyledRecipe>
      <h2> {title} </h2>
      <div>
        <img className={classes.image} src={Image} alt={alt} />
      </div>
      <div>
        <RecipeIngredient status="red" title="1 Cup Brown Rice" />
        <RecipeIngredient
          status="green"
          title="1/2 Medium Onion"
          secondary="chopped"
        />
        <Divider />
      </div>
      <RecipeInstruction text="Chop Shit Up" />
    </StyledRecipe>
  );
}

Recipe.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.string,
  alt: PropTypes.string,
};

export default withStyles(styles)(Recipe);
