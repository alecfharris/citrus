import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
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

const dummyRecipes = [
  {
    id: 639487,
    title: 'Cinnamon Sugar Fried Apples',
    image:
      'https://spoonacular.com/recipeImages/Cinnamon-Sugar-Fried-Apples-639487.jpg',
    usedIngredientCount: 3,
    missedIngredientCount: 8,
    likes: 46,
    summary: 'I like desserts but they make me fat',
    instructions: 'additional info tbd!',
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
    instructions: 'additional info tbd!',
    estimatedTime: 55,
  },
];

const dummyIngredients = ['apple', 'flour', 'oats'];
class Browse extends React.Component {
  state = { recipes: [] };

  componentDidMount() {
    this.getIngredientsList(dummyIngredients);
  }

  getIngredientsList = ingredients => {
    // build query string https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ingredients=apples%2Cflour%2Csugar
    const ingredientList = ingredients
      .map(ingredient => `${ingredient}%2C`)
      .join('');
    const queryString = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=${
      dummyIngredients.length
    }&ranking=1&ingredients=${ingredientList}`;
    axios
      .get(queryString, {
        headers: {
          'X-RapidAPI-Key':
            'MYPL92HY3cmshOzLkll6ixnLVAVlp1nZQhxjsnf245LFIJlc9D',
        },
      })
      .then(res => {
        const recipeData = res.data;
        console.log('returned recipe data is ', recipeData);
        this.setState({ recipes: recipeData });
      });
  };

  render() {
    const { recipes } = this.state;

    return (
      <React.Fragment>
        <NavBar />
        <StyledBrowse>
          {recipes.map(recipe => (
            <BrowseRecipeCard recipe={recipe} key={recipe.id} />
          ))}
        </StyledBrowse>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Browse);
