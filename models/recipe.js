const mongoose = require('mongoose');

const { Schema } = mongoose;

const recipeSchema = new Schema({
  title: { type: String, required: true },
  ingredients: { type: Array, required: true },
  instructions: String,
  // image: { type: Array, required: true },
  // link: { type: String, required: true, unique: true },
  accountId: { type: String, required: true },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
