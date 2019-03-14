// fridgeCreate.js
import mongoose from 'mongoose';

// Load the server
let conn = null;
const uri = 'mongodb://citrus:co5RRDQ65qBfgo6d@citrus-shard-00-00-ot2tv.mongodb.net:27017,citrus-shard-00-01-ot2tv.mongodb.net:27017,citrus-shard-00-02-ot2tv.mongodb.net:27017/test?ssl=true&replicaSet=Citrus-shard-0&authSource=admin&retryWrites=true';
// process.env.MONGODB_URI;

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
        date: { type: Date, required: true},
        accountId: { type: String, required: true },
      })
    );
  }

  try {
    const data = await JSON.parse(event.body);

    console.log(data);

    const name = data.name;

    const quantity = data.quantity;

    const unit = data.unit;

    const date = data.date;

    const accountId = data.accountId;

    const id = mongoose.Types.ObjectId();

    const fridge = {
      _id: id,
      name,
      quantity,
      unit,
      date,
      accountId,
    };

    const response = {
      msg: 'Fridge successfully created',
      data: fridge,
    };

    //   Use Fridge.Model to create a new Fridge
    await Fridge.create(fridge);

    return {
      statusCode: 201,
      body: JSON.stringify(response),
    };
  } catch (err) {
    console.log('fridge.create', err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    };
  }
};
