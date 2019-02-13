// const express = require('express');
// const path = require('path');
// const mongoose = require('mongoose');
// // const routes = require('./routes');

// const PORT = process.env.PORT || 3001;
// const app = express();
// const server = require('http').Server(app);

// app.use(express.static(path.join(__dirname)));

// // Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets (usually on heroku)
// // if (process.env.NODE_ENV === 'production') {
// //   app.use(express.static('client/build'));
// // }

// // Define API routes here
// // app.use(routes);

// // Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reactrecipes');
// // Send every other request to the React app
// // Define any API routes before this runs
// app.get('/', (req, res) => {
//   res.sendStatus(200);
// });

// server.listen(PORT, () => {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });

const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`App is listening on port ${port}`);
