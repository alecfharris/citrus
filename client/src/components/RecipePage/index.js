import React from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import RecipeView from '../RecipeInformation';
import StyledRecipePage from './style';
import NavBar from '../NavBar';
import Recipe from './recipe-test';

class RecipePage extends React.Component {
  state = {
    Recipes: {},
  };

  componentDidMount() {
    this.getRecipeInfo();
  }

  getRecipeInfo = recipeId => {
    const queryString = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/information`;
    if (recipeId) {
      axios
        .get(queryString, {
          headers: {
            'X-RapidAPI-Key':
              'MYPL92HY3cmshOzLkll6ixnLVAVlp1nZQhxjsnf245LFIJlc9D',
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
        <NavBar title="Citrus" />
        <StyledRecipePage>
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
        </StyledRecipePage>
      </React.Fragment>
    );
  }
}

// RecipePage.propTypes = {
//   title: PropTypes.string
// };

export default RecipePage;
