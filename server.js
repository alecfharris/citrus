const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
// const routes = require('./routes');

const app = express();

// Define API routes here
// app.use(routes);

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reactrecipes');
// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port);

console.log(`App is listening on port ${port}`);
