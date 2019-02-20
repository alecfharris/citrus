// recipeCreate.js
import mongoose from 'mongoose';

// Load the Recipe Model

// import Recipe from './recipeModel';

// Load the server
const conn = null;
const uri = process.env.MONGODB_URI;

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  if (conn == null) {
    conn = await mongoose.createConnection(uri, {
      // Buffering means mongoose will queue up operations if it gets
      // disconnected from MongoDB and send them when it reconnects.
      // With serverless, better to fail fast if not connected.
      bufferCommands: false, // Disable mongoose buffering
      bufferMaxEntries: 0 // and MongoDB driver buffering
  });

  const Recipe = conn.model('recipe', new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectID,
    title: { type: String, required: true },
    ingredients: { type: Array, required: true },
    instructions: String,
    accountId: { type: String, required: true },
  }));

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
