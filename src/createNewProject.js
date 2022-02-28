import Project from './project'
import Task from './task'
import { toDate, isToday, isThisWeek, subDays, compareAsc } from 'date-fns'

let createProject = () => {

    let projects = [];
    let activeProject = "Inbox";
    let createDiv = document.getElementById("create-div");
    let replaceCreate = document.getElementById("replace-create");
    let addButton = document.getElementById('project-add-button');
    let cancelButton = document.getElementById("project-cancel-button"); ''
    let addTask = document.getElementById('add-task');
    let taskInputs = document.getElementById('task-inputs');
    let taskInputCancel = document.getElementById("input-task-cancel");
    let taskInputAdd = document.getElementById("input-task-add");
    let taskGrid = document.getElementById("task-grid");
    let projectList = document.getElementById('project-list');
    let deleteButtons = [];
    let projectSelect = document.getElementById("project-select");
    let prioritySelect = document.getElementById("priority-select");
    let inbox = new Project("Inbox");
    let inboxDiv = document.getElementById("inbox-div");
    let todayTasks = document.getElementById("today-div");
    let upcomingDiv = document.getElementById("upcoming-div");
    console.log(todayTasks);

    projects.push(inbox);
    //console.log(inboxDiv);

    todayTasks.addEventListener("click", () => {

        activeProject = "Today";
        clearTaskGrid();
        console.log("today clicked");

        let tasks = projects[0].getTasks();
        for (let i = 0; i < tasks.length; i++) {
            let taskName = tasks[i].getName();
            let taskDate = tasks[i].getDate();

            let item = document.getElementById("item-" + taskName + taskDate);

            if (isToday(new Date(taskDate))) {
                item.classList.remove("passive");
            }

        }

    })
    upcomingDiv.addEventListener("click", () => {

        activeProject = "upcoming";
        clearTaskGrid();
        console.log("upcoming clicked");

        let tasks = projects[0].getTasks();
        for (let i = 0; i < tasks.length; i++) {
            let taskName = tasks[i].getName();
            let taskDate = tasks[i].getDate();

            let item = document.getElementById("item-" + taskName + taskDate);

            if (isThisWeek(new Date(taskDate))) {
                item.classList.remove("passive");
            }

        }

    })

    inboxDiv.addEventListener('click', () => {
        console.log("inbox clicked");
        if (activeProject != "Inbox") {
            activeProject = "Inbox";
            clearTaskGrid();
            loadTasks("Inbox");
        }
        //deleteTaskEventListener();
    })


    createDiv.addEventListener('click', () => {

        console.log("1");
        replaceCreate.classList.remove("passive");
        createDiv.classList.add("passive");
    });

    addButton.addEventListener('click', () => {
        //console.log("1");

        replaceCreate.classList.add("passive");
        console.log("2");
        createDiv.classList.remove("passive");

        let projectName = document.getElementById("project-name").value;
        document.getElementById("project-name").value = "";

        let projectid = replaceSpace(projectName);
        projectList.innerHTML += `<div class = "item" id = "item-${projectid}">
                    
        <img src="images/list.png" alt="">
        <div class = "text" id = "text-${projectid}">
        </div>
        <button class = "delete-button" id = "get-delete-${projectid}">
            <img class = "delete" id = "img-${projectid}" src="images/icons8-delete-24.png" alt="">
        </button>
    </div>`;


        document.getElementById("text-" + projectid).textContent = projectName;

        let newProject = new Project(projectName);
        projects.push(newProject);
        console.log(projects);

        addProjectEventListener();

        projectSelect.innerHTML += `<option id = "option-${projectName}" value="${projectid}">${projectName}</option>`

        addDeleteProjectEventListener();

        /*for (let i = 0; i < deleteButtons.length; i++) {


            let button = document.getElementById(deleteButtons[i].id);
            let prid = deleteButtons[i].id.replace("get-delete-", "");

            button.addEventListener('click', (event) => {


                let deleted = document.getElementById("item-" + prid);
                projectList.removeChild(deleted);





            })
        }*/


    });

    let addDeleteProjectEventListener = () => {

        for (let i = 1; i < projects.length; i++) {

            let prid = replaceSpace(projects[i].getName());
            let deleteItem = document.getElementById("img-" + prid);
            console.log(deleteItem);
            deleteItem.addEventListener('click', () => {
                let tobedeleted = document.getElementById("item-" + prid);
                projectList.removeChild(tobedeleted);

                let optionremove = document.getElementById("option-" + projects[i].getName());
                projectSelect.removeChild(optionremove);

                let tasks = projects[i].getTasks();

                for (let i = 0; i < tasks.length; i++) {
                    let taskName = tasks[i].getName();
                    let taskDate = tasks[i].getDate();

                    let taskItem = document.getElementById("item-" + taskName + taskDate);
                    taskGrid.removeChild(taskItem);

                    let newInboxTask = projects[0].getTasks().filter(function (value) {
                        return value.getName() != taskName;
                    })
                    projects[0].setTasks(newInboxTask);
                }

                let newProjects = projects.filter(function (value) {
                    return value.getName() != projects[i].getName();
                })
                projects = newProjects;

            })

        }

    }


    cancelButton.addEventListener('click', () => {

        replaceCreate.classList.add("passive");
        console.log("3");
        createDiv.classList.remove("passive");

    });

    addTask.addEventListener('click', () => {

        addTask.classList.add("passive");
        console.log("4");
        taskInputs.classList.remove('passive');


    });
    taskInputCancel.addEventListener('click', () => {
        console.log("5");
        addTask.classList.remove("passive");
        taskInputs.classList.add("passive");
    });

    taskInputAdd.addEventListener('click', () => {

        //console.log("6");
        //checkTasks();
        let checkArray = [];
        let tasks = projects[0].getTasks();
        for (let i = 0; i < tasks.length; i++) {

            let taskName = tasks[i].getName();
            let taskDate = tasks[i].getDate();
            let checkboxItem = document.getElementById("checkbox-" + taskName + taskDate);
            checkArray.push(checkboxItem.checked);

        }


        addTask.classList.remove("passive");
        taskInputs.classList.add('passive');
        //checkTasks();

        let taskName = document.getElementById("input-task-name").value;
        let taskDate = document.getElementById("input-task-date").value;
        let taskProject = projectSelect.options[projectSelect.selectedIndex].text;
        let priority = prioritySelect.options[prioritySelect.selectedIndex].text;


        let newTask = new Task(taskName, taskDate);

        projects[0].addTask(newTask);
        
        
        let i = 1;

        for (; i < projects.length; i++) {
            if (projects[i].getName() == taskProject) {
                projects[i].addTask(newTask);
            }
        }
        addTaskToGrid(taskName, taskDate, priority);
        addEventListenerToDelete();

        let t2 = projects[0].getTasks();
        for (let i = 0; i < t2.length - 1; i++) {

            let taskName = t2[i].getName();
            let taskDate = t2[i].getDate();
            let checkboxItem = document.getElementById("checkbox-" + taskName + taskDate);
            checkboxItem.checked = checkArray[i];


        }





        //addEventListenertoChecked(
    });

    let checkTasks = () => {
        let tasks = projects[0].getTasks();
        for (let i = 0; i < tasks.length; i++) {

            let taskName = tasks[i].getName();
            let taskDate = tasks[i].getDate();

            let checkbox = document.getElementById("checkbox-" + taskName + taskDate);
            console.log("item-" + i + " ischeched: " + checkbox.checked);

        }
    }


    /*let addEventListenertoChecked = () =>{
    
        let tasks = projects[0].getTasks();
        for(let i = 0; i < tasks.length; i++){
    
            let taskName = tasks[i].getName();
            let taskDate = tasks[i].getDate();
    
            let checkbox = document.getElementById("checkbox-"+taskName+taskDate);
            console.log("checkbox: ")
            console.log(checkbox);
    
            checkbox.addEventListener("click", () =>{
    
    
                console.log("ischecked: ");
                console.log(checkbox.checked);
                if(checkbox.checked == true){
                    checkbox.checked = true;
                }else{
                    //console.log("false");
                    checkbox.checked = false;
                }
    
            })
    
    
    
        } 
    
    }*/

    let findProject = (taskName, taskDate) => {

        for (let i = 1; i < projects.length; i++) {

            let project = projects[i];
            let tasks = projects[i].getTasks();
            for (let j = 0; j < tasks.length; j++) {
                if (/*tasks[j].getDate() == taskDate &&*/ tasks[j].getName() == taskName) {
                    return project;
                }
            }

        }

    }

    let addEventListenerToDelete = () => {
        let tasks = projects[0].getTasks();

        for (let i = 0; i < tasks.length; i++) {
            let taskName = tasks[i].getName();
            let taskDate = tasks[i].getDate();

            let deleteTask = document.getElementById("delete-img-" + taskName + taskDate);

            deleteTask.addEventListener('click', () => {

                let tobedeleted = document.getElementById("item-" + taskName + taskDate);
                taskGrid.removeChild(tobedeleted);

                let project = findProject(taskName, taskDate);
                if (project == undefined) {
                    project = projects[0];
                }
                console.log(project);

                let newTasks = project.getTasks().filter(function (value) {
                    return value.getName() != taskName;
                })
                project.setTasks(newTasks);
                console.log("newTasks: ");
                console.log(newTasks);

                if (project.getName() != "Inbox") {
                    let newInboxTasks = projects[0].getTasks().filter(function (value) {
                        return value.getName() != taskName;
                    })
                    console.log("newInboxTasks: ");
                    console.log(newInboxTasks);
                    projects[0].setTasks(newInboxTasks);
                }

            })

        }
    }

    let replaceSpace = (projectName) => {
        let projectid = "";
        for (let i = 0; i < projectName.length; i++) {
            if (projectName[i] != " ") {
                projectid = projectid + projectName[i];
            }
        }
        return projectid;
    }


    let addProjectEventListener = () => {
        for (let i = 0; i < projects.length; i++) {

            let prname = projects[i].getName();
            let prid = replaceSpace(prname);

            if (prname == "Inbox") {
                continue;
            }

            let project = document.getElementById("item-" + prid);

            project.addEventListener('click', () => {


                if (activeProject != prname) {
                    console.log("i am clicked");
                    activeProject = prname;
                    clearTaskGrid();
                    loadTasks(prname);
                }

            })

        }
    }

    let addTaskToGrid = (taskName, taskDate, priority) => {

        taskGrid.innerHTML += `<div class="item ${priority}" id  = "item-${taskName}${taskDate}">
        <input type="checkbox" id="checkbox-${taskName}${taskDate}" name="task1" value="task1">
        <label class="task-label" for="task1">
            <div class="task-name" id="task-name">
                ${taskName}
            </div>
            <div class="task-date" id="task-date">
                ${taskDate}
            </div>
            <div class="delete-expand">
                <button class="expand-img">
                    <img class="expand-img" src="images/expand-button.png" alt="">
                </button>
                <button class="delete-img">
                    <img id = "delete-img-${taskName}${taskDate}" class="delete-img" src="images/icons8-delete-24.png" alt="">
                </button>
            </div>
        </label>
    </div>`;

        checkTasks();

        //let item = document.getElementById("checkbox-"+taskName+taskDate);
        /*console.log("ischecked: ");
        console.log(item.checked);*/

    }



    let clearTaskGrid = () => {

        let elements = taskGrid.getElementsByTagName("*");

        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.add("passive");
        }

    }
    let loadTasks = (prname) => {

        let project;
        for (let i = 0; i < projects.length; i++) {
            if (prname == projects[i].getName()) {
                project = projects[i];
            }
        }
        if (project == undefined) {
            loadTasks("Inbox");
            return;
        }
        console.log(project);
        let tasks = project.getTasks();
        console.log(tasks);
        console.log(tasks.length);

        let bound = tasks.length;
        //console.log("bound: " + bound);

        for (let q = 0; q < bound; q++) {

            console.log("q: " + q);
            let taskName = tasks[q].getName();
            let taskDate = tasks[q].getDate();
            console.log(taskName + taskDate);

            let item = document.getElementById("item-" + taskName + taskDate);
            console.log(item);

            //console.log("7");
            item.classList.remove("passive");
        }
        console.log("hello world");

    }
}
export { createProject };