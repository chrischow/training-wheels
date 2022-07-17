const express = require('express');
const app = express();
const logger = require('./middleware/logger');

// Logger middleware - also defined in separate file
// const logger = (req, res, next) => {
//   const method = req.method;
//   const url = req.url;
//   const time = new Date().toISOString();
//   console.log(`[${time}] ${method} - ${url}`);
//   next();
// };

// Use middleware on all routes below this line
app.use(logger);

// Use middleware on specific routes below this line
// app.use('/api', logger);

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