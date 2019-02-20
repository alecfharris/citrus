// recipeCreate.js
import mongoose from 'mongoose';

// Load the server
import db from './server';

// Load the Recipe Model

import Recipe from './recipe.model';

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    const data = JSON.parse(event.body);

    const { title } = data.title;

    const { ingredients } = data.ingredients;

    const { instructions } = data.instructions;

    const { accountId } = data.accountId;

    const id = mongoose.Types.ObjectId();

    const recipe = {
      _id: id,
      title,
      ingredients,
      instructions,
      accountId,
    };

    const response = {
      msg: 'Recipe successfully created',
      data: recipe,
    };

    //   Use Recipe.Model to create a new recipe
    await Recipe.create(recipe);

    return {
      statusCode: 201,
      body: JSON.stringify(response),
    };
  } catch (err) {
    console.log('recipe.create', err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    };
  }
};
