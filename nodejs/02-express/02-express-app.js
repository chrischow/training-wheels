const express = require('express');
const path = require('path');

const app = express();

// Custom logger
const logRequest = (req, res) => {
  console.log(`[${(new Date()).toISOString()}] ${req.method} ${req.url} ${res.statusCode}`);
}

// Set up static files
app.use(express.static(path.resolve('./static')))

// Will not be rendered because `index.html` exists in static folder
app.get('/', (req, res) => {
  logRequest(req, res);
  // sendFile must have an absolute path
  // res.status(200).sendFile(path.resolve(__dirname, 'static', 'index.html'));
  res.send('hey');
});

app.all('*', (req, res) => {
  logRequest(req, res);
  res.status(404).send('<h1>Resource not found</h1>');
});


app.listen(5001, () => {
  console.log('Server started on port 5001...');
});