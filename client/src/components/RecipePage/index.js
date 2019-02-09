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
          vegetarian={Recipe.vegetarian}
          vegan={Recipe.vegean}
          glutenFree={Recipe.glutenFree}
          dairyFree={Recipe.dairyFree}
          veryHealthy={Recipe.veryHealthy}
          cheap={Recipe.cheap}
          popular={Recipe.veryPopular}
          sustainable={Recipe.sustainable}
          lowFodmap={Recipe.lowFodmap}
          ketogenic={Recipe.ketogenic}
          whole30={Recipe.whole30}
        />
      </StyledRecipePage>
    </div>
  );
}

// RecipePage.propTypes = {
//   title: PropTypes.string
// };

export default RecipePage;
