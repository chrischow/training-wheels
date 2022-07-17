const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const authorise = require('./middleware/authorise');

// Use middleware on all routes
app.use([authorise, logger]);

// Home page
app.get('/', (req, res) => {
  res.send('Home');
});

// About page
app.get('/about', (req, res) => {
  res.send('About');
});

app.listen(5001, () => {
  console.log('Server listening on port 5001...');
})