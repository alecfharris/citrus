import React from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import RecipeView from '../RecipeInformation/RecipeInformation';
import Recipe from './RecipePage.temp';

class RecipePage extends React.Component {
  state = {
    Recipes: {},
  };

  componentDidMount() {
    this.getRecipeInfo();
  }

  getRecipeInfo = () => {
    const recipeId = this.props.match.params.id; // eslint-disable-line
    const queryString = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/information`;
    if (recipeId) {
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
      <React.Fragment>
        <RecipeView
          title={title}
          image={image}
          instructions={instructions}
          ingredients={extendedIngredients}
          readyIn={readyInMinutes}
          originalUrl={sourceUrl}
          creditText={creditText}
          dietaryRestrictions={dietaryRestriction}
        />
      </React.Fragment>
    );
  }
}

// RecipePage.propTypes = {
//   title: PropTypes.string
// };

export default RecipePage;
