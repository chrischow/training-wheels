const express = require('express');

// Create app
const app = express();

// Logger function
const logRequest = (req, res) => {
  console.log(`[${(new Date()).toISOString()}] ${req.method} ${req.url} ${res.statusCode}`);
}

// Home page
app.get('/', (req, res) => {
  logRequest(req, res);
  res.status(200).send('Home Page');
});

// About page
app.get('/about', (req, res) => {
  logRequest(req, res);
  res.status(200).send('About Page');
});

// 404
app.all('*', (req, res) => {
  logRequest(req, res);
  res.status(404).send('<h1>Resource not found.</h1>');
});

// Start server
app.listen(5001, () => {
  console.log('Server listening on port 5001...');
});