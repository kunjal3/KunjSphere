let notices = JSON.parse(localStorage.getItem("notices")) || [];
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let tests = JSON.parse(localStorage.getItem("tests")) || [];

function showSection(id) {
  document.querySelectorAll(".section").forEach(s => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
  renderAll();
}

/* NOTICE BOARD */
function openNoticeModal() {
  document.getElementById("noticeModal").classList.remove("hidden");
}
function closeNoticeModal() {
  document.getElementById("noticeModal").classList.add("hidden");
}
function saveNotice() {
  const text = noticeInput.value.trim();
  if (!text) return;
  notices.push(text);
  localStorage.setItem("notices", JSON.stringify(notices));
  noticeInput.value = "";
  closeNoticeModal();
  renderNotices();
}
function renderNotices() {
  noticeList.innerHTML = notices.map(n =>
    `<div class="bg-card p-3 rounded">${n}</div>`
  ).join("");
}

/* TASKS */
function renderTasks() {
  todayTasks.innerHTML = tasks.map((t, i) =>
    `<div>
      <input type="checkbox" ${t.done ? "checked" : ""} onclick="toggleTask(${i})">
      ${t.name}
    </div>`
  ).join("");

  completedTasks.innerHTML = tasks.filter(t => t.done).map(t => `✔️ ${t.name}`).join("<br>");
}

function toggleTask(i) {
  tasks[i].done = !tasks[i].done;
  saveTasks();
}

/* TESTS */
function addTest() {
  const name = testInput.value.trim();
  if (!name) return;
  tests.push({ name, done: false });
  testInput.value = "";
  saveTests();
}
function renderTests() {
  testList.innerHTML = tests.map((t, i) =>
    `<div>
      <input type="checkbox" ${t.done ? "checked" : ""} onclick="toggleTest(${i})">
      ${t.name}
    </div>`
  ).join("");

  upcomingTests.innerHTML = tests.filter(t => !t.done).map(t => t.name).join("<br>");
}
function toggleTest(i) {
  tests[i].done = !tests[i].done;
  saveTests();
}

/* PROGRESS */
function renderProgress() {
  const total = tasks.length;
  const done = tasks.filter(t => t.done).length;
  const pending = total - done;
  const percent = total ? Math.round((done / total) * 100) : 0;

  progressPercent.innerText = percent + "% Completed";
  progressDetails.innerText = `Completed ${done} out of ${total} tasks`;

  document.getElementById("progressBar").style.width = percent + "%";
  document.getElementById("totalTasks").innerText = total;
  document.getElementById("completedCount").innerText = done;
  document.getElementById("pendingCount").innerText = pending;
  document.getElementById("testCount").innerText = tests.filter(t => !t.done).length;
}


/* STORAGE */
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderAll();
}
function saveTests() {
  localStorage.setItem("tests", JSON.stringify(tests));
  renderAll();
}

/* SETTINGS */
function resetData() {
  if (confirm("Reset all data?")) {
    localStorage.clear();
    location.reload();
  }
}

function renderAll() {
  renderNotices();
  renderTasks();
  renderTests();
  renderProgress();
}

/* INIT SAMPLE TASKS */
if (tasks.length === 0) {
  tasks = [
    { name: "Revise DSA", done: false },
    { name: "Complete React Lecture", done: false }
  ];
  saveTasks();
}

renderAll();
