const mongoose = require('mongoose');

// This tells MongoDB exactly what data a Task is allowed to have
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true // A task MUST have a title
  },
  description: {
    type: String, // A description is optional
    required: false
  },
  completed: {
    type: Boolean,
    default: false // By default, a new task is NOT completed
  }
}, { timestamps: true }); // Automatically adds 'createdAt' and 'updatedAt' times!

// Export the model so we can use it in our main server file
module.exports = mongoose.model('Task', taskSchema);
