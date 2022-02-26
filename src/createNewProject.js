import {Project} from './project';

let createProject = () => {

    let projects = [];
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


    createDiv.addEventListener('click', () => {


        replaceCreate.classList.remove("passive");
        createDiv.classList.add("passive");
    })

    addButton.addEventListener('click', () => {

        console.log("hello wtf");
        replaceCreate.classList.add("passive");
        createDiv.classList.remove("passive");

        let projectName = document.getElementById("project-name").value;
        document.getElementById("project-name").value = "";

        let projectid = "";

        for (let i = 0; i < projectName.length; i++) {
            if (projectName[i] != " ") {
                projectid = projectid + projectName[i];
            }
        }

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

        let newProject = new Project(projectid);
        projects.push(newProject);
        console.log("merhaba");
        console.log(projects);

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
    console.log()

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

        console.log(taskName);
        console.log(taskDate);

        taskGrid.innerHTML += `<div class="item">
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
                    <img class="delete-img" src="images/icons8-delete-24.png" alt="">
                </button>
            </div>
        </label>
    </div>`;
    });







}
export { createProject };