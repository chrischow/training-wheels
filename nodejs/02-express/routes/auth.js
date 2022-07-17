const express = require('express');
const router = express.Router();

const { people } = require('../data');

// Login route
// Create
router.post('/', (req, res) => {
  const { name } = req.body;
  if (name) {
    const targetPerson = people.find(person => person.name === name);
    if (targetPerson) {
      return res.status(200).send(`Welcome ${targetPerson.name}!`);
    } else {
      return res.status(401).send('Not authorised.');
    }
  }
  return res.status(401).send('Please provide a name.');
});

module.exports = router;