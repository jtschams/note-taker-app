const express = require('express');
const routes = require('./routes');

// Sets up port and express instance
const PORT = process.env.PORT || 3000;
const app = express();

// Middleware to parse json and urlencoded form data, send the full public folder for requests, and use routes for all requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(routes);

app.listen(PORT, () =>
  console.log(`App listening at port ${PORT}`)
);