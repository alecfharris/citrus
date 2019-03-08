import React from 'react';

const RecipeTitle = () => (
  <div style={{ margin: '5px' }}>
    <label htmlFor="recipe-title">
      Recipe Title:
      <input type="text" name="recipe-title" id="recipe-title" />
    </label>
    <div>
      <label htmlFor="ingredients">
        Ingredients:
        <input type="text" name="ingredients" id="ingredients  " />
      </label>
    </div>
  </div>
);

export default RecipeTitle;
