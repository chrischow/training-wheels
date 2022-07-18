const Task = require('../models/Task');

const wrapper = (main, handleError) => {
  try {
    main();
  } catch (err) {
    handleError(err);
  }
}

const getAllTasks = async (req, res) => {
  try {
    const data = await Task.find({}, { '__v': 0 });
    return res.status(200).json({ success: true, data });
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
  try {
    const { id } = req.params;
    const task = await Task.findOne({ '_id': id }, { '__v': 0 });
    if (!task) {
      return res.status(404).json({ success: false, message: 'Task does not exist.' })
    }
    return res.status(200).json({ success: true, data: {task: task} });
  } catch (err) {
    return res.status(500).json({ success: false, ...err });
  }
}

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.updateOne({ '_id': id }, req.body, {
      new: true, runValidators: true
    });
    if (!task) {
      return res.status(404).json({ success: false, message: 'Task does not exist.' })
    }
    return res.status(200).json({ success: true, message: 'Successfully updated task.', data: task });
  } catch (err) {
    return res.status(500).json({ success: false, ...err });
  }
}

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOneAndDelete({ '_id': id });
    if (!task) {
      return res.status(404).json({ success: false, message: 'Task does not exist.' })
    }
    return res.status(200).json({ success: true, message: 'Successfully deleted task.' });
  } catch (err) {
    return res.status(500).json({ success: false, ...err });
  }
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}