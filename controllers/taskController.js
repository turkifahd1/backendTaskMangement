const taskService = require('../services/taskService');

const createTask = async (req, res) => {
  try {
    const { title, description,dayOfWeek } = req.body;
    const userId = req.user.id;
    const newTask = await taskService.createTask(title, description,dayOfWeek, userId);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedTask = await taskService.updateTask(id, data);
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await taskService.deleteTask(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getTasks = async (req, res) => {
  try {
    const userId = req.user.id;
    const tasks = await taskService.getTasks(userId);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createTask, updateTask, deleteTask, getTasks };
