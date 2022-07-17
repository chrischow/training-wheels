const express = require('express');
const router = express.Router();
const {
  getPeople,
  getPerson,
  createPerson,
  updatePerson,
  deletePerson
} = require('../controllers/people');

// Read
router.get('/', getPeople);
router.get('/:id', getPerson);
// "Create"
router.post('/', createPerson);
// "Update"
router.put('/:id', updatePerson);
// "Delete"
router.delete('/:id', deletePerson);

// Alternate way to set up routes
// router.route('/')
//   .get(getPeople)
//   .post(createPerson);

// router.route('/:id')
//   .get(getPerson)
//   .put(updatePerson)
//   .delete(deletePerson);

module.exports = router;