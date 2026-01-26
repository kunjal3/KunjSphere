let notices = JSON.parse(localStorage.getItem("notices")) || [];
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let tests = JSON.parse(localStorage.getItem("tests")) || [];

const sections = document.querySelectorAll('.section');

function showSection(id) {
  sections.forEach(s => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
  renderAll();
}

document.getElementById('btnDashboard').addEventListener('click',()=>showSection('dashboard'));
document.getElementById('btnNotice').addEventListener('click',()=>showSection('notice'));
document.getElementById('btnLearning').addEventListener('click',()=>showSection('learning'));
document.getElementById('btnAssessments').addEventListener('click',()=>showSection('assessments'));
document.getElementById('btnProgress').addEventListener('click',()=>showSection('progress'));
document.getElementById('btnSettings').addEventListener('click',()=>showSection('settings'));

// Notice Modal
function openNoticeModal(){document.getElementById("noticeModal").classList.remove("hidden");}
function closeNoticeModal(){document.getElementById("noticeModal").classList.add("hidden");}

document.getElementById('addNoticeBtn').addEventListener('click',openNoticeModal);
document.getElementById('cancelNoticeBtn').addEventListener('click',closeNoticeModal);
document.getElementById('saveNoticeBtn').addEventListener('click',saveNotice);

function saveNotice() {
  const text = noticeInput.value.trim();
  if (!text){document.getElementById('noticeError').innerText="Notice cannot be empty";return;}
  document.getElementById('noticeError').innerText="";
  notices.push(text);
  localStorage.setItem("notices", JSON.stringify(notices));
  noticeInput.value = "";
  closeNoticeModal();
  renderNotices();
}

function renderNotices() {
  noticeList.innerHTML = "";
  notices.forEach(n=>{
    const div=document.createElement('div');
    div.className="bg-card p-3 rounded";
    div.innerText=n;
    noticeList.appendChild(div);
  });
}

// Tasks
function renderTasks() {
  todayTasks.innerHTML="";
  completedTasks.innerHTML="";

  tasks.forEach((t,i)=>{
    const div=document.createElement('div');
    div.className="flex items-center gap-2";

    const cb=document.createElement('input'); cb.type="checkbox"; cb.checked=t.done;
    cb.addEventListener('click',()=>toggleTask(i));
    const span=document.createElement('span'); span.innerText=t.name;
    div.appendChild(cb); div.appendChild(span);

    todayTasks.appendChild(div);

    if(t.done){
      const d=document.createElement('div'); d.innerText="✔️ "+t.name;
      completedTasks.appendChild(d);
    }
  });
  renderProgress();
}

function toggleTask(i){tasks[i].done=!tasks[i].done;saveTasks();}

function addTask(){
  const name = taskInput.value.trim();
  if(!name){document.getElementById('taskError').innerText="Task cannot be empty"; return;}
  document.getElementById('taskError').innerText="";
  tasks.push({name, done:false});
  taskInput.value="";
  saveTasks();
}

document.getElementById('addTaskBtn').addEventListener('click',addTask);

// Tests
function renderTests(){
  testList.innerHTML=""; upcomingTests.innerHTML="";
  tests.forEach((t,i)=>{
    const div=document.createElement('div'); div.className="flex items-center gap-2";

    const cb=document.createElement('input'); cb.type="checkbox"; cb.checked=t.done;
    cb.addEventListener('click',()=>toggleTest(i));
    const span=document.createElement('span'); span.innerText=t.name;
    div.appendChild(cb); div.appendChild(span);

    testList.appendChild(div);

    if(!t.done){
      const u=document.createElement('div'); u.innerText=t.name; upcomingTests.appendChild(u);
    }
  });
}

function toggleTest(i){tests[i].done=!tests[i].done; saveTests();}

function addTest(){
  const name=testInput.value.trim();
  if(!name){document.getElementById('testError').innerText="Test name cannot be empty";return;}
  document.getElementById('testError').innerText="";
  tests.push({name, done:false});
  testInput.value="";
  saveTests();
}

document.getElementById('addTestBtn').addEventListener('click',addTest);

// Progress Bar
function renderProgress(){
  const total=tasks.length;
  const done=tasks.filter(t=>t.done).length;
  const percent=total?Math.round((done/total)*100):0;
  
  progressBar.style.width = percent+"%";
  progressBar.innerText = percent+"%";
  progressPercent.innerText=percent+"% Completed";
  progressDetails.innerText=`Completed ${done} out of ${total} tasks`;

  totalTasks.innerText=total;
  completedCount.innerText=done;
  pendingCount.innerText=total-done;
  testCount.innerText=tests.filter(t=>!t.done).length;
}

// Save & Reset
function saveTasks(){localStorage.setItem("tasks",JSON.stringify(tasks)); renderAll();}
function saveTests(){localStorage.setItem("tests",JSON.stringify(tests)); renderAll();}
function resetData(){if(confirm("Reset all data?")){localStorage.clear(); location.reload();}}
document.getElementById('resetBtn').addEventListener('click',resetData);

function renderAll(){renderNotices(); renderTasks(); renderTests(); renderProgress();}

//


