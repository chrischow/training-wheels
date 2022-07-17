// Fake data
let { people } = require('../data');

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const getPerson = (req, res) => {
  const { id } = req.params;
  const targetPerson = people.find(person => person.id === Number(id));
  return res.status(200).send({ success: true, data: targetPerson });
};

const createPerson = (req, res) => {
  const { name } = req.body;
  if (name) {
    people.push({ name });
    return res.status(201).send(`Successfully submitted name: ${name}`);
  }
  return res.status(400).json({ success: false, message: 'Please provide a name' });
};

const updatePerson = (req, res) => {
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
};

const deletePerson = (req, res) => {
  const { id } = req.params;
  const targetPerson = people.find((person) => person.id === Number(id));
  if (!targetPerson) {
    return res.status(404).json({ success: false, message: 'Invalid ID.' });
  }
  const newPeople = people.filter((person) => person.id !== Number(id));
  return res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
  getPeople,
  getPerson,
  createPerson,
  updatePerson,
  deletePerson
}