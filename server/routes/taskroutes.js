const express = require('express');
const router = express.Router();
const Task = require('../models/Task'); // We import the model we just created!

// 1. GET ALL TASKS (Read)
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 }); // Newest tasks first
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});

// 2. CREATE A NEW TASK (Create)
router.post('/', async (req, res) => {
  try {
    const newTask = new Task({
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed
    });
    const savedTask = await newTask.save(); // Save it to MongoDB
    res.json(savedTask); // Send the saved task back to the frontend
  } catch (err) {
    res.status(500).json({ error: "Failed to create task" });
  }
});

// 3. EDIT A TASK (Update)
router.put('/:id', async (req, res) => {
  try {
    // Find the task by its ID and update it with the new data
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: "Failed to update task" });
  }
});

// 4. DELETE A TASK (Delete)
router.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete task" });
  }
});

module.exports = router;
