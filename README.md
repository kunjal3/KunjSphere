# KunjSphere 🌌 – Personal Learning Universe

## 📌 Project Title & Description

**KunjSphere** is a DOM-based personal learning dashboard that helps users manage daily tasks, track learning progress, view upcoming tests, and post notices — all in one interactive interface.

It is built using **Vanilla JavaScript, HTML, and CSS (Tailwind)** and runs entirely in the browser using client-side state management via `localStorage`.

The application behaves like a real frontend app:

* Data persists across reloads
* UI updates dynamically
* User actions reflect instantly in the DOM

---

## ❓ Problem Statement

Students often struggle to manage:

* Daily study tasks
* Learning progress
* Upcoming assessments
* Important notices

There is no simple, lightweight web tool that combines all of these into a single interface without heavy frameworks.

**KunjSphere** solves this by providing a clean, interactive dashboard that:

* Tracks tasks and completion status
* Visualizes progress
* Displays upcoming tests
* Allows users to post and view notices

All functionality is implemented using core JavaScript and DOM manipulation.

---

## ✨ Features Implemented

* 📋 **Task Manager**

  * Add tasks
  * Toggle task completion
  * View completed tasks
  * Persistent storage using localStorage

* 📈 **Progress Tracking**

  * Visual progress bar
  * Percentage completion
  * Live updates based on task completion

* 🧠 **Assessments Module**

  * Add upcoming tests
  * Toggle test completion
  * Dynamic test list rendering

* 📌 **Notice Board**

  * Add and view notices
  * Modal-based input
  * Persistent notices

* 📊 **Dashboard Summary**

  * Total tasks
  * Completed tasks
  * Pending tasks
  * Upcoming tests

* ⚙️ **Settings**

  * Reset all stored data

---

## 🧩 DOM Concepts Used

* document.querySelector() / getElementById()
* document.createElement()
* appendChild()
* classList.add() / classList.remove()
* Dynamic rendering of elements
* Event handling with addEventListener()
* Conditional DOM updates
* DOM-based UI state synchronization

---

## ▶️ Steps to Run the Project

1. Clone the repository

```bash
git clone <your-repo-url>
```

2. Open the project folder

```bash
cd kunjsphere
```

3. Open `index.html` in your browser

OR

Use Live Server (recommended)

---

## ⚠️ Known Limitations

* No backend (client-side only)
* No user authentication
* No task categories or deadlines
* No cloud sync
* UI is not optimized for very small screens

---

## 🛠️ Tech Stack

* HTML5
* CSS3 (Tailwind CSS)
* Vanilla JavaScript (ES6)
* Browser APIs (localStorage)

---

## 📁 Project Structure


kunjsphere
├── index.html
├── style.css
├── script.js
└── README.md


---

## 🎯 Why This Project Meets the Rubric

This project demonstrates:

* Deep DOM manipulation
* Event-driven UI logic
* Client-side state handling
* Persistent data storage
* Dynamic rendering
* Error handling
* Vanilla JavaScript implementation

It avoids frameworks and relies purely on core web technologies.

---

## 👩‍💻 Author

**Kunjal Dubey**

---

## 📌 Final Notes

This project was built as part of the **Web Dev II Final Project** for Batch 2029.

It focuses on functionality, clarity, and real-world usability rather than visual complexity.

