// server.js
import mongoose from 'mongoose';

const dotenv = require('dotenv').config();
// Initialize connection to database
const dbUrl = process.env.MONGODB_URI;

const dbOptions = {
  useNewUrlParser: true,
  useFindAndModify: false,
};
// Set DB from mongoose connection
mongoose.connect(dbUrl, dbOptions);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
export default db;
