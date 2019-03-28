// recipeCreate.js
import mongoose from 'mongoose';

require('dotenv').config();

// Load the server
let conn = null;
const uri = process.env.MONGODB_URI;

// Load the Recipe Model
let Recipe = Recipe;

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  if (conn == null) {
    conn = await mongoose.createConnection(uri, {
      // Buffering means mongoose will queue up operations if it gets
      // disconnected from MongoDB and send them when it reconnects.
      // With serverless, better to fail fast if not connected.
      bufferCommands: false, // Disable mongoose buffering
      bufferMaxEntries: 0, // and MongoDB driver buffering
    });
  }
  if (Recipe === undefined) {
    Recipe = conn.model(
      'recipe',
      new mongoose.Schema({
        title: { type: String, required: true },
        ingredients: { type: Array, required: true },
        instructions: String,
        accountId: { type: String, required: true },
      })
    );
  }

  try {
    const doc = await Recipe.find();

    const response = {
      msg: 'Recipe successfully read',
      data: doc,
    };

    return {
      statusCode: 201,
      body: JSON.stringify(response),
    };
  } catch (err) {
    console.log('recipe.read', err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    };
  }
};
