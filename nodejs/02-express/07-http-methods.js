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
    people.push({ name });
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

// Pseudo-create
app.post('/api/people', (req, res) => {
  const { name } = req.body;
  if (name) {
    people.push({ name });
    return res.status(201).send(`Successfully submitted name: ${name}`);
  }
  return res.status(400).json({ success: false, message: 'Please provide a name' });
});

// Pseudo-update
app.put('/api/people/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  if (!name) {
    return res.status(404).json({ success: false, message: `Invalid ID.` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  return res.status(200).json({ success: true, data: newPeople });
});

// Pseudo-delete
app.delete('/api/people/:id', (req, res) => {
  const { id } = req.params;
  const targetPerson = people.find((person) => person.id === Number(id));
  if (!targetPerson) {
    return res.status(404).json({ success: false, message: 'Invalid ID.' });
  }
  const newPeople = people.filter((person) => person.id !== Number(id));
  return res.status(200).json({ success: true, data: newPeople });
});

app.listen(5001, () => {
  console.log('Server is listening on port 5001...');
});