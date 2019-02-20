import React from 'react';
import ReactDOM from 'react-dom';
import BrowseRecipeCard from './index';

const recipe = {
  id: 639487,
  title: 'Cinnamon Sugar Fried Apples',
  image:
    'https://spoonacular.com/recipeImages/Cinnamon-Sugar-Fried-Apples-639487.jpg',
  usedIngredientCount: 3,
  missedIngredientCount: 8,
  likes: 46,
  summary: 'I like desserts but they make me fat',
  instructions: 'additional info tbd!',
  estimatedTime: 55,
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<div />, div);
  ReactDOM.unmountComponentAtNode(div);
});
