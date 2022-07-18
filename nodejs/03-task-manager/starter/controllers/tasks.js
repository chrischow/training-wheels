const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-error');

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({}, { '__v': 0 });
  return res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  return res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const task = await Task.findOne({ '_id': id }, { '__v': 0 });
  if (!task) {
    const error = createCustomError('Task does not exist.', 404);
    return next(error);
  }
  return res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOneAndUpdate({ '_id': id }, req.body, {
    new: true, runValidators: true
  });
  if (!task) {
    const error = createCustomError('Task does not exist.', 404);
    return next(error);
  }
  return res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOneAndDelete({ '_id': id });
  if (!task) {
    const error = createCustomError('Task does not exist.', 404);
    return next(error);
  }
  return res.status(200).json({ message: 'Successfully deleted task.' });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}