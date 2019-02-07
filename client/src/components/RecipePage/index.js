import React from 'react';
// import PropTypes from 'prop-types';
import RecipeView from '../RecipeInformation';
import StyledRecipePage from './style';
import NavBar from '../NavBar';
import Recipe from './recipe-test';

function RecipePage() {
  return (
    <div>
      <NavBar title="Citrus" />
      <StyledRecipePage>
        <RecipeView
          title={Recipe.title}
          image={Recipe.image}
          instructions={Recipe.instructions}
          ingredients={Recipe.extendedIngredients}
          readyIn={Recipe.readyInMinutes}
          originalUrl={Recipe.sourceUrl}
          creditText={Recipe.creditText}
        />
      </StyledRecipePage>
    </div>
  );
}

// RecipePage.propTypes = {
//   title: PropTypes.string
// };

export default RecipePage;
