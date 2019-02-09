import React, { Component } from 'react';
import NavBar from '../NavBar';
import RecipeInput from '../RecipeInput';
import StyledRecipeEntry from './style';

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
