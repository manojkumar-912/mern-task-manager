import { useState, useEffect } from 'react'
import axios from 'axios' // messenger library!
import './App.css'

function App() {

  const [tasks, setTasks] = useState([]) // Holds the list of tasks from the database
  const [newTaskTitle, setNewTaskTitle] = useState("") // Holds what the user types in the box

  useEffect(() => {
    fetchTasks(); // Go grab the tasks immediately!
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/tasks");
      setTasks(response.data); // Save the database data into our 'tasks' State Variable
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };
  const addTask = async (e) => {
    e.preventDefault(); // Stop the page from refreshing when we submit the form
    if (!newTaskTitle) return; // Don't allow empty tasks

    try {
      const response = await axios.post("http://localhost:5000/api/tasks", {
        title: newTaskTitle,
        completed: false
      });
      // Add the new task to our list and clear the input box
      setTasks([response.data, ...tasks]); 
      setNewTaskTitle(""); 
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };


  return (
    <div className="app-container">
      <h1>My Task Manager</h1>
      
      {/* The form to add a new task */}
      <form onSubmit={addTask} className="task-form">
  {/* Accessible label – hidden visually but read by screen‑readers */}
  <label htmlFor="new-task-input" className="visually-hidden">
    New task title
  </label>

  <input
    id="new-task-input"          // <-- added id
    name="newTaskTitle"          // optional, but nice to have
    type="text"
    placeholder="What do you need to do?"
    value={newTaskTitle}
    onChange={(e) => setNewTaskTitle(e.target.value)}
  />
  <button type="submit">Add Task</button>
</form>


      {/* The list of tasks */}
        <div className="task-list">
          {tasks.map((task) => (
            <div key={task._id} className="task-card">
              <h3
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                  opacity: task.completed ? 0.6 : 1,
                }}
              >
                {task.title}
              </h3>
              <div style={{ display: 'flex', gap: '8px' }}>
                {/* Toggle completion */}
                <button
                  onClick={async () => {
                    try {
                      const res = await axios.put(`http://localhost:5000/api/tasks/${task._id}`, {
                        completed: !task.completed,
                      });
                      setTasks((prev) =>
                        prev.map((t) => (t._id === task._id ? res.data : t))
                      );
                    } catch (err) {
                      console.error('Toggle error:', err);
                    }
                  }}
                  style={{
                    background: task.completed ? '#ff6b6b' : '#4facfe',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '4px 8px',
                    cursor: 'pointer',
                  }}
                >
                  {task.completed ? 'Undo' : 'Done'}
                </button>

                {/* Edit title */}
                <button
                  onClick={async () => {
                    const newTitle = prompt('Edit task title', task.title);
                    if (!newTitle) return;
                    try {
                      const res = await axios.put(`http://localhost:5000/api/tasks/${task._id}`, {
                        title: newTitle,
                        completed: task.completed,
                      });
                      setTasks((prev) =>
                        prev.map((t) => (t._id === task._id ? res.data : t))
                      );
                    } catch (err) {
                      console.error('Edit error:', err);
                    }
                  }}
                  style={{
                    background: '#4facfe',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '4px 8px',
                    cursor: 'pointer',
                  }}
                >
                  Edit
                </button>

                {/* Delete task */}
                <button
                  onClick={async () => {
                    try {
                      await axios.delete(`http://localhost:5000/api/tasks/${task._id}`);
                      setTasks((prev) => prev.filter((t) => t._id !== task._id));
                    } catch (err) {
                      console.error('Delete error:', err);
                    }
                  }}
                  style={{
                    background: '#ff6b6b',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '4px 8px',
                    cursor: 'pointer',
                  }}
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default App
