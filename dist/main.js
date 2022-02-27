(()=>{"use strict";class e{constructor(e){this.name=e,this.tasks=[]}setName(e){this.name=e}getName(){return this.name}setTasks(e){this.tasks=e}getTasks(){return this.tasks}getTask(e){for(let t=0;t<this.tasks.length;t++)if(this.tasks[t].getName()===e)return this.tasks[t]}addTask(e){this.tasks.find((t=>t.getName()===e.name))||this.tasks.push(e)}deleteTask(e){this.tasks=this.tasks.filter((t=>t.name!==e))}}class t{constructor(e,t="No date"){this.name=e,this.dueDate=t}setName(e){this.name=e}getName(){return this.name}setDate(e){this.dueDate=e}getDate(){return this.dueDate}getDateFormatted(){const e=this.dueDate.split("/")[0];return`${this.dueDate.split("/")[1]}/${e}/${this.dueDate.split("/")[2]}`}}document.getElementById("content").innerHTML+='<div class = "header">\n    <div class = "app-name">\n        To Do App\n    </div>\n\n    <div class = "inbox-text">\n        Inbox\n    </div>\n</div>\n',document.getElementById("content").innerHTML+='<div class = "container">\n    <div class = "left-side" id = "left-side">\n        <div class = "button-div" id = "inbox-div">\n            <img src="./images/inbox.png" alt="">\n            <button>Inbox</button>\n        </div>\n        <div class = "button-div" id = "today-div">\n            <img src="./images/calendar.png" alt="">\n            <button>Today</button>\n        </div>\n        <div class = "button-div" id = "upcoming-div">\n            <img src="./images/calendar(1).png" alt="">\n            <button>Upcoming</button>\n        </div>\n        <div class = "projects">\n            <img src="./images/icons8-filled-circle-50.png" alt="">\n            <div class = "txt">\n                Projects\n            </div>\n        </div>\n        <div class = "button-div" id = "create-div">\n            <img src="./images/plus.png" alt="">\n            <button id = "create-button">Create New Project</button>\n        </div>\n        \n        <div class = "replace-create passive" id = "replace-create">\n            <input placeholder="project name" class = "project-name" id = "project-name" type="text">\n            <div class = "project-button">\n                <button id = "project-add-button">Add</button>\n                <button id = "project-cancel-button">Cancel</button>\n            </div>\n        </div>\n        \n        <div class = "project-list" id = "project-list">\n                    \n        </div>\n    </div>\n    <div class="right-side" id="right-side">\n                <button class = "add-task" id = "add-task">\n                    <img class = "plus-img" src="images/plus.png" alt="">\n                    <div>Add Task</div>\n                </button>\n\n                <div class="task-inputs passive" id="task-inputs">\n                    <div class="name-date-project">\n                        <input type="text" id="input-task-name" class="input-task-name" placeholder="Task Name">\n                        <input type="date" id="input-task-date" class="input-task-date" placeholder="Schedule">\n                        <select name="project-select" id="project-select">\n                            <option value="Inbox">Inbox</option>\n                        </select>\n                    </div>\n                    <div class = "priority-add-cancel">\n                        <select name="priority-select" id="priority-select">\n                            <option selected value="Inbox">Select Priority</option>\n                        </select>\n\n                        <div class ="add-cancel">\n                            <button class = "input-task-add" id = "input-task-add">\n                                Add\n                            </button>\n                            <button class = "input-task-cancel" id = "input-task-cancel">\n                                Cancel \n                            </button>\n                        </div>\n                    </div>\n                </div>\n\n                <div class="task-grid" id = "task-grid">\n                    \n                </div>\n            </div>\n</div>\n',(()=>{let n=[],s="Inbox",a=document.getElementById("create-div"),i=document.getElementById("replace-create"),d=document.getElementById("project-add-button"),l=document.getElementById("project-cancel-button"),c=document.getElementById("add-task"),o=document.getElementById("task-inputs"),m=document.getElementById("input-task-cancel"),r=document.getElementById("input-task-add"),u=document.getElementById("task-grid"),g=document.getElementById("project-list"),v=[],p=document.getElementById("project-select"),k=new e("Inbox"),b=document.getElementById("inbox-div");n.push(k),console.log(b),b.addEventListener("click",(()=>{"Inbox"!=s&&(s="Inbox",x(),L("Inbox")),I()})),a.addEventListener("click",(()=>{i.classList.remove("passive"),a.classList.add("passive")})),d.addEventListener("click",(()=>{console.log("1"),i.classList.add("passive"),a.classList.remove("passive");let t=document.getElementById("project-name").value;document.getElementById("project-name").value="";let s=h(t);g.innerHTML+=`<div class = "item" id = "item-${s}">\n                    \n        <img src="images/list.png" alt="">\n        <div class = "text" id = "text-${s}">\n        </div>\n        <button class = "delete-button" id = "get-delete-${s}">\n            <img class = "delete" id = "img-${s}" src="images/icons8-delete-24.png" alt="">\n        </button>\n    </div>`,document.getElementById("text-"+s).textContent=t;let d=document.getElementById("get-delete-"+s);v.push(d);let l=new e(t);n.push(l),console.log(n),y(),p.innerHTML+=`<option value="${s}">${t}</option>`;for(let e=0;e<v.length;e++){let t=document.getElementById(v[e].id),n=v[e].id.replace("get-delete-","");t.addEventListener("click",(e=>{let t=document.getElementById("item-"+n);g.removeChild(t)}))}})),l.addEventListener("click",(()=>{i.classList.add("passive"),a.classList.remove("passive")})),c.addEventListener("click",(()=>{c.classList.add("passive"),o.classList.remove("passive")})),m.addEventListener("click",(()=>{c.classList.remove("passive"),o.classList.add("passive")})),r.addEventListener("click",(()=>{c.classList.remove("passive"),o.classList.add("passive");let e=document.getElementById("input-task-name").value,s=document.getElementById("input-task-date").value,a=p.options[p.selectedIndex].text,i=new t(e,s);n[0].addTask(i);for(let e=1;e<n.length;e++)n[e].getName()==a&&n[e].addTask(i);E(e,s),I(a)}));let h=e=>{let t="";for(let n=0;n<e.length;n++)" "!=e[n]&&(t+=e[n]);return t},I=(e="")=>{let t=n[0].getTasks();for(let s=0;s<t.length;s++){let a=t[s].getName(),i=t[s].getDate();document.getElementById("delete-img-"+a+i).addEventListener("click",(()=>{let s=document.getElementById("item-"+a+i);u.removeChild(s);let d,l=t.filter((function(e){return e.getName()!=a||e.getDate()!=i}));n[0].setTasks(l);for(let t=0;t<n.length;t++)n[t].getName()==e&&(d=n[t]);let c=d.getTasks().filter((function(e){return e.getName()!=a||e.getDate()!=i}));d.setTasks(c)}))}},y=()=>{for(let e=0;e<n.length;e++){let t=n[e].getName(),a=h(t);"Inbox"!=t&&document.getElementById("item-"+a).addEventListener("click",(()=>{s!=t&&(s=t,x(),L(t))}))}},E=(e,t)=>{u.innerHTML+=`<div class="item" id  = "item-${e}${t}">\n        <input type="checkbox" id="task1" name="task1" value="task1">\n        <label class="task-label" for="task1">\n            <div class="task-name" id="task-name">\n                ${e}\n            </div>\n            <div class="task-date" id="task-date">\n                ${t}\n            </div>\n            <div class="delete-expand">\n                <button class="expand-img">\n                    <img class="expand-img" src="images/expand-button.png" alt="">\n                </button>\n                <button class="delete-img">\n                    <img id = "delete-img-${e}${t}" class="delete-img" src="images/icons8-delete-24.png" alt="">\n                </button>\n            </div>\n        </label>\n    </div>`},x=()=>{u.innerHTML=""},L=e=>{let t;for(let s=0;s<n.length;s++)e==n[s].getName()&&(t=n[s]);console.log(t);let s=t.getTasks();for(let e=0;e<s.length;e++){let t=s[e].getName(),n=s[e].getDate();E(t,n)}}})()})();