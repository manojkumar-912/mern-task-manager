# MERN Task Manager

## Project Description
A sleek, premium‑looking **Task Manager** web application built with the **MERN** stack (MongoDB, Express, React, Node). Users can create, read, update, and delete tasks via a modern dark‑mode UI with glass‑morphism styling.

## Features
- Full CRUD operations for tasks
- Toggle task completion (Done/Undo)
- Edit task titles inline
- Delete tasks
- Accessible form (hidden label + `aria-label`)
- Premium dark‑mode, gradient background, glass‑morphism cards

## Technologies Used
| Layer | Technology |
|-------|------------|
| Database | MongoDB (local or Atlas) |
| ORM | Mongoose |
| Server | Node.js, Express, CORS, dotenv |
| Frontend | React (Vite), Axios |
| Styling | Vanilla CSS (glass‑morphism) |
| AI Assistant | **Code0** VS Code extension |

## Setup & Installation
1. **Clone the repo**
   ```bash
   git clone https://github.com/manojkumar-912/mern-task-manager.git
   cd mern-task-manager
   ```
2. **Backend**
   ```bash
   cd server
   npm install
   echo "MONGO_URI=mongodb://localhost:27017/taskmanager" > .env
   node server.js   # runs on http://localhost:5000
   ```
3. **Frontend**
   ```bash
   cd ../client
   npm install
   npm run dev      # runs on http://localhost:5173
   ```

## How to Run the Application
1. Ensure MongoDB is running (`net start MongoDB` or `mongod`).
2. Start the backend (`node server.js`).
3. In a separate terminal, start the frontend (`npm run dev`).
4. Open `http://localhost:5173` in a browser, add/edit/delete tasks, and watch the changes persist in MongoDB.

## AI Tool Used
**Code0** – the VS Code extension you linked (`https://marketplace.visualstudio.com/items?itemName=frigga.code0`).

## AI Development Experience
Code0 was used throughout the project to accelerate development. Specific tasks where the assistant was leveraged:
1. **Component Development** – generated the initial `App.jsx` skeleton, including state hooks and Axios calls.
2. **API Creation** – produced the Express server skeleton, route definitions, and Mongoose model.
3. **Debugging** – identified the missing `cors()` middleware and suggested the correct order, fixing the “Network Error” in the browser.
4. **Database Integration** – wrote the connection logic with `dotenv` and added helpful console messages.
5. **Refactoring & Styling** – created the premium glass‑morphism CSS and added accessible hidden labels.

---

### Publishing to GitHub (quick steps)
1. **Create a new public repository** on GitHub (e.g., `mern-task-manager`).
2. In the local project root (`mern-task-app`), run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit – MERN Task Manager"
   git branch -M main
   git remote add origin https://github.com/manojkumar-912/mern-task-manager.git
   git push -u origin main
   ```
3. Verify the files appear on GitHub, including this `README.md`.

You can now share the repository link with interviewers or collaborators.
