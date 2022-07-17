const express = require('express');

const { people } = require('./data');
const app = express();

// Default route
app.get('/', (req, res) => {
  res.status(200).send(`<h1>Home Page</h1><a href="/api/people">API</a>`);
});

// Get all people
app.get('/api/people', (req, res) => {
  res.status(200).json(people.map(elem => {
    const { name } = elem;
    return { name };
  }));
});

// Get specific person
app.get('/api/people/:personId', (req, res) => {
  const { personId } = req.params;
  const person = people.find(elem => {
    return elem.id === Number(personId);
  });
  if (person) {
    res.status(200).json(person);
  } else {
    res.status(404).json({'message': `Person with ID ${personId} not found.`})
  }
});

// Start server
app.listen(5001, () => {
  console.log('Server is listening on port 5001...');
});