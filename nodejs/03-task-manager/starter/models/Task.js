const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is a required field.'],
    trim: true,
    maxlength: [32, 'Name cannot be longer than 32 characters.']
  },
  completed: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Task', TaskSchema);