import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { Link } from 'react-router-dom';
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

class Browse extends React.Component {
  state = { recipes: [] };

  componentDidMount() {
    const { location = {} } = this.props;

    // If route includes ingredients call API to do ingredient search, otherwise render favorite recipes
    return location.selected
      ? this.getIngredientsList(Object.values(location.selected)[0])
      : this.renderFavoriteRecipes();
  }

  getIngredientsList = ingredients => {
    // build query string https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ingredients=apples%2Cflour%2Csugar

    console.log(ingredients);
    const ingredientList = ingredients
      .map(ingredient => `${ingredient}%2C`)
      .join('');
    const queryString = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=10&ranking=1&ingredients=${ingredientList}`;
    axios
      .get(queryString, {
        headers: {
          'X-RapidAPI-Key':
            'MYPL92HY3cmshOzLkll6ixnLVAVlp1nZQhxjsnf245LFIJlc9D',
        },
      })
      .then(res => {
        const recipeData = res.data;
        this.setState({ recipes: recipeData });
      });
  };

  // TODO: Due to API limitation need to store recipe info in DB for user. This will grab info and send array to render
  renderFavoriteRecipes = recipes => {
    // pass JSON stored in server to state to render
    this.setState({ recipes });
  };

  render() {
    const { recipes } = this.state;

    return (
      <React.Fragment>
        <NavBar title="Citrus" />
        <StyledBrowse>
          {recipes.map(recipe => (
            <BrowseRecipeCard recipe={recipe} key={recipe.id} />
          ))}
        </StyledBrowse>
      </React.Fragment>
    );
  }
}

Browse.propTypes = {
  location: PropTypes.object,
};

export default withStyles(styles)(Browse);