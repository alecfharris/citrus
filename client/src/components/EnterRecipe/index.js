import React from 'react';
import { Component } from 'react';
import StyledRecipeEntry from './style';
import NavBar from '../NavBar';
import RecipeInput from '../RecipeInput';

// Database Queries go here
// const saveRecipe = (props) => {
//     API.saveRecipe({
//         title: props.title,
//         ingredients: props.ingredients,
//         instructions: props.instructions,
//         // TODO change accountId to real value once possible
//         accountId: 't0d0r3m0v3l8rt3st64'
//       })
// }

// Event.target

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

      // Form Views go here (from a separate file)
    );
  }
}

export default EnterRecipe;
