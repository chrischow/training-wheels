const express = require('express');
const app = express();

let { people } = require('./data');

// Middleware
// Register static assets
app.use(express.static('./public'));
// Parse form data
app.use(express.urlencoded({ extended: false }));

// Home route
app.get('/', (req, res) => {
  return res.status(200).send('<h1>Home Page</h1>');
});

// Create
app.post('/login', (req, res) => {
  const { name } = req.body;
  if (name) {
    people.push({name});
    return res.status(200).send(`Welcome ${name}!`);
  }
  return res.status(401).send('Please provide a name.');
});

// Parse JSON
app.use(express.json());

// Read
app.get('/api/people', (req, res) => {
  return res.status(200).send({ success: true, data: people })
});

// Create
app.post('/api/people', (req, res) => {
  const { name } = req.body;
  if (name) {
    people.push({name});
    return res.status(201).send(`Successfully submitted name: ${name}`);
  }
  return res.status(400).json({success: false, message: 'Please provide a name'});
});

app.listen(5001, () => {
  console.log('Server is listening on port 5001...');
});