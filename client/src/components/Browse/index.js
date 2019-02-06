import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import StyledBrowse from './style.js';
import NavBar from '../NavBar';
import BrowseRecipeCard from '../BrowseRecipeCard';

const styles = theme => ({
  card: {
    maxWidth: 400,
    margin: 8,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: 'white',
  },
});

const recipes = [
  {
    id: 639487,
    title: 'Cinnamon Sugar Fried Apples',
    image:
      'https://spoonacular.com/recipeImages/Cinnamon-Sugar-Fried-Apples-639487.jpg',
    usedIngredientCount: 3,
    missedIngredientCount: 8,
    likes: 46,
    summary: 'I like desserts but they make me fat',
    dropdown: 'additional info tbd!',
    estimatedTime: 55,
  },
  {
    id: 639488,
    title: 'Cinnamon Sugar Fried Apples',
    image:
      'https://spoonacular.com/recipeImages/Cinnamon-Sugar-Fried-Apples-639487.jpg',
    usedIngredientCount: 3,
    missedIngredientCount: 8,
    likes: 46,
    summary: 'I like desserts but they make me fat',
    dropdown: 'additional info tbd!',
    estimatedTime: 55,
  },
];

class Browse extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <StyledBrowse>
          {recipes.map(recipe => (
            <BrowseRecipeCard recipe={recipe} />
          ))}
        </StyledBrowse>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Browse);
