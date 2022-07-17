const e = require('express');
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

// Search route
app.get('/api/query', (req, res) => {
  const { search, limit } = req.query;
  let results = [...people];
  if (!search) {
    return res.status(404).json({'message': 'Provide a query string.'});
  } else {
    results = results.filter(elem => {
      return elem.name.toLowerCase().includes(search.toLowerCase());
    });
  }

  if (limit) {
    results = results.slice(0, Number(limit));
  }

  if (results.length < 1) {
    return res.status(200).json({message: 'No products matched your query.'});
  }
  return res.status(200).json({results});
});

// Start server
app.listen(5001, () => {
  console.log('Server is listening on port 5001...');
});