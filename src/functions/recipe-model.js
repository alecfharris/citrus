// recipeModel.js
import mongoose from 'mongoose';

// Set Recipe Schema
const schema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectID,
  title: { type: String, required: true },
  ingredients: { type: Array, required: true },
  instructions: String,
  accountId: { type: String, required: true },
});

const Recipe = mongoose.model('recipe', schema);

export default Recipe;
