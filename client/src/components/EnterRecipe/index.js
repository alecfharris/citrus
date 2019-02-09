import React, { Component } from 'react';
import IngredientInput from '../IngredientInput';

class EnterRecipe extends Component {
  render() {
    return (
      <div>
        <NavBar title="Citrus" />
        <StyledRecipeEntry>
          <div>
            <RecipeInput />
          </div>
          {/* <div>
            <IngredientInput />
          </div> */}
        </StyledRecipeEntry>
      </div>
    );
  }
}

export default EnterRecipe;
