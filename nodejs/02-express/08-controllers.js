const express = require('express');
const app = express();

const peopleRouter = require('./routes/people');
const authRouter = require('./routes/auth');

// Middleware
// Register static assets
app.use(express.static('./public'));
// Parse form data
app.use(express.urlencoded({ extended: false }));
// Parse JSON
app.use(express.json());

// Router
app.use('/api/people', peopleRouter);
app.use('/login', authRouter);

// Home route
app.get('/', (req, res) => {
  return res.status(200).send('<h1>Home Page</h1>');
});

// Start server
app.listen(5001, () => {
  console.log('Server is listening on port 5001...');
});