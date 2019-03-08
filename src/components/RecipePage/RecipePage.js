import React from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import Recipe from './RecipePage.temp';
import RecipeInformation from '../RecipeInformation/RecipeInformation';

export default class RecipePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Recipes: {},
    };
  }

  componentDidMount() {
    const id = this.props.id;// eslint-disable-line
    this.getRecipeInfo(id);
  }

  getRecipeInfo = id => {
    const queryString = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`;
    if (id) {
      axios
        .get(queryString, {
          headers: {
            'X-RapidAPI-Key':
              'otjDFlURFBmshZdSBfRqP6wDBbczp1XNiRzjsnRi3Iqm6V0ZI7',
          },
        })
        .then(res => {
          const recipeData = res.data;
          this.setState({ Recipes: recipeData });
        });
    } else {
      this.setState({ Recipes: Recipe });
    }
  };

  render() {
    const {
      title,
      image,
      instructions,
      extendedIngredients,
      readyInMinutes,
      sourceUrl,
      creditText,
      vegetarian,
      vegan,
      glutenFree,
      dairyFree,
      veryHealthy,
      cheap,
      sustainable,
      lowFodmap,
      ketogenic,
      whole30,
      veryPopular,
    } = this.state.Recipes; // eslint-disable-line react/destructuring-assignment

    const dietaryRestriction = {
      vegetarian,
      vegan,
      glutenFree,
      dairyFree,
      veryHealthy,
      cheap,
      sustainable,
      lowFodmap,
      ketogenic,
      whole30,
      veryPopular,
    };

    return (
      <RecipeInformation
        title={title}
        image={image}
        instructions={instructions}
        ingredients={extendedIngredients}
        readyIn={readyInMinutes}
        originalUrl={sourceUrl}
        creditText={creditText}
        dietaryRestrictions={dietaryRestriction}
      />
    );
  }
}
