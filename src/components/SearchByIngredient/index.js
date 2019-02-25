import React from 'react';
import StyledIngredientSearch from './style';
import NavBar from '../NavBar';
import SelectFridge from '../SelectFridge';
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

class SearchByIngredient extends React.Component {
  render() {
    return (
      <div>
        <NavBar title="Citrus" />
        <StyledIngredientSearch>
          <div>
            <SelectFridge />
          </div>
        </StyledIngredientSearch>
      </div>
    );
  }
}

export default SearchByIngredient;
