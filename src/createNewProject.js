import Project from './project'
import Task from './task'

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
    let inbox = new Project("Inbox");
    let inboxDiv = document.getElementById("inbox-div");
    projects.push(inbox);
    console.log(inboxDiv);

    inboxDiv.addEventListener('click', () => {
        if(activeProject != "Inbox"){
            activeProject = "Inbox";
            clearTaskGrid();
            loadTasks("Inbox");
        }
        deleteTaskEventListener();
    })


    createDiv.addEventListener('click', () => {


        replaceCreate.classList.remove("passive");
        createDiv.classList.add("passive");
    });

    addButton.addEventListener('click', () => {
        console.log("1");

        replaceCreate.classList.add("passive");
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

        let deleteButton = document.getElementById('get-delete-' + projectid);
        
        deleteButtons.push(deleteButton);

        let newProject = new Project(projectName);
        projects.push(newProject);
        console.log(projects);
        
        addProjectEventListener();
        
        projectSelect.innerHTML += `<option value="${projectid}">${projectName}</option>`

        

        for (let i = 0; i < deleteButtons.length; i++) {


            let button = document.getElementById(deleteButtons[i].id);
            let prid = deleteButtons[i].id.replace("get-delete-", "");

            button.addEventListener('click', (event) => {


                let deleted = document.getElementById("item-" + prid);
                projectList.removeChild(deleted);

            })
        }

    });


    cancelButton.addEventListener('click', () => {

        replaceCreate.classList.add("passive");
        createDiv.classList.remove("passive");

    });

    addTask.addEventListener('click', () => {

        addTask.classList.add("passive");
        taskInputs.classList.remove('passive');


    });
    taskInputCancel.addEventListener('click', () => {
        addTask.classList.remove("passive");
        taskInputs.classList.add("passive");
    });

    taskInputAdd.addEventListener('click', () => {

        addTask.classList.remove("passive");
        taskInputs.classList.add('passive');

        let taskName = document.getElementById("input-task-name").value;
        let taskDate = document.getElementById("input-task-date").value;
        let taskProject = projectSelect.options[projectSelect.selectedIndex].text;

        let newTask = new Task(taskName, taskDate);

        projects[0].addTask(newTask);

        for(let i = 1; i < projects.length; i++){
            if(projects[i].getName() == taskProject){
                projects[i].addTask(newTask);
            }
        }

        addTaskToGrid(taskName, taskDate);
        deleteTaskEventListener(taskProject);
    
    });

    let replaceSpace = (projectName) => {
        let projectid = "";
        for (let i = 0; i < projectName.length; i++) {
            if (projectName[i] != " ") {
                projectid = projectid + projectName[i];
            }
        }
        return projectid;
    }

    let deleteTaskEventListener = (name = "") => {

        
        let tasks = projects[0].getTasks();
        //console.log("mrb");
        for(let i = 0; i < tasks.length; i++){

            let taskName = tasks[i].getName();
            let taskDate = tasks[i].getDate();
            let deleteImg = document.getElementById("delete-img-"+taskName+taskDate);
            deleteImg.addEventListener('click' , () => {
                

                let tobedeleted = document.getElementById("item-"+taskName+taskDate);
                taskGrid.removeChild(tobedeleted);
                
                let filtered = tasks.filter(function(value){
                    return value.getName() != taskName || value.getDate() != taskDate;
                });
                
                projects[0].setTasks(filtered);
                

                let project;
                for(let i = 0; i<projects.length; i++){
                    if(projects[i].getName()== name){
                        project = projects[i];
                    }
                }
                
                let filtered2 = project.getTasks().filter(function(value){
                    return value.getName() != taskName || value.getDate() != taskDate;
                })
                project.setTasks(filtered2);
                


                
            })
        }


    }

    let addProjectEventListener = () => {
        for(let i = 0; i < projects.length; i++){

            let prname = projects[i].getName();
            let prid = replaceSpace(prname);
            
            if(prname == "Inbox"){
                continue;
            }
            let project = document.getElementById("item-"+prid);
            
            project.addEventListener('click' , () => {

                
                if(activeProject != prname){
                    activeProject = prname;
                    clearTaskGrid();
                    loadTasks(prname);
                }

            })

        }
    }

    let addTaskToGrid = (taskName, taskDate) => {

        taskGrid.innerHTML += `<div class="item" id  = "item-${taskName}${taskDate}">
        <input type="checkbox" id="task1" name="task1" value="task1">
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

    }



    let clearTaskGrid = () => {
        taskGrid.innerHTML = "";
    }
    let loadTasks = (prname) => {

        let project;
        for(let i = 0; i<projects.length; i++){
            if(prname == projects[i].getName()){
                project = projects[i];
            }
        }
        console.log(project);
        let tasks = project.getTasks();

        for(let i = 0; i<tasks.length; i++){
            
            let taskName = tasks[i].getName();
            let taskDate = tasks[i].getDate();

            addTaskToGrid(taskName, taskDate);

        }

    }






}
export { createProject };