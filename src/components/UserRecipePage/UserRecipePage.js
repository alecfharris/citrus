import React from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import Recipe from './UserRecipePage.temp';
import UserRecipeInformation from '../UserRecipeInformation/UserRecipeInformation';

export default class RecipePage extends React.Component {
  state = {
    promiseIsResolved: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      Recipes: {},
    };
  }

  componentDidMount() {
    this.getRecipeInfo();
  }

  getRecipeInfo() {
    axios.get('/.netlify/functions/recipe-read').then(res => {
      const recipeData = res.data;
      this.setState({ Recipes: recipeData });
      this.setState({ promiseIsResolved: true });
    });
  }

  // Alphabetize recipes by name
  compare(a, b) {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  }

  render() {
    const { promiseIsResolved } = this.state;

    if (!promiseIsResolved) {
      return null;
    }

    if (promiseIsResolved) {
      const recipes = this.state.Recipes.data; // eslint-disable-line react/destructuring-assignment
      recipes.sort(this.compare);
      return (
        <div>
          {recipes.map(recipe => (
            <UserRecipeInformation
              title={recipe.title}
              instructions={recipe.instructions}
              ingredients={recipe.ingredients}
            />
          ))}
        </div>
      );
    }
  }
}
