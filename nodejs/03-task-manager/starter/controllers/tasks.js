const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
  try {
    const data = await Task.find({}, {'__v': 0});
    return res.status(200).json({ success: true, data: data });
  } catch (err) {
    return res.status(500).json({ success: false, ...err });
  }
}

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    return res.status(201).json({ task });
  } catch (err) {
    return res.status(500).json({ success: false, ...err });
  }
}

const getTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findOne({'_id': id}, {'__v': 0});
    if (!task) {
      return res.status(404).json({ success: false, message: 'Task does not exist.' })
    }
    return res.status(200).json({ success: true, data: task });
  } catch (err) {
    return res.status(500).json({ success: false, ...err });
  }
}

const updateTask = (req, res) => {
  const { id } = req.params;
  return res.status(200).json({ success: true, message: `Update task ID=${id}` });
}

const deleteTask = (req, res) => {
  const { id } = req.params;
  return res.status(200).json({ success: true, message: `Delete task ID=${id}` });
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}