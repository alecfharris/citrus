const mongoose = require('mongoose');

const { Schema } = mongoose;

const apiRecipeSchema = new Schema({
  recipeId: {type: String, required: true},
  accountId: { type: String, required: true }
});

const APIRecipes = mongoose.model('APIRecipes', apiRecipeSchema);

module.exports = APIRecipes;