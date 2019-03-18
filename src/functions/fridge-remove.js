// fridgeCreate.js
import mongoose from 'mongoose';

require('dotenv').config();

// Load the server
let conn = null;
const uri = process.env.MONGODB_URI;

// Load the Fridge Model
let Fridge = Fridge;

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
  if (Fridge === undefined) {
    Fridge = conn.model(
      'fridge',
      new mongoose.Schema({
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        unit: String,
        date: { type: Date, required: true },
        accountId: { type: String, required: true },
      })
    );
  }

  try {
    //   Use Fridge.Model to read Fridge
    const doc = await Fridge.deleteOne({ _id: event.queryStringParameters.id });

    const response = {
      msg: 'Fridge item successfully deleted',
      data: doc,
    };

    return {
      statusCode: 201,
      body: JSON.stringify(response),
    };
  } catch (err) {
    console.log('fridge.remove', err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    };
  }
};
