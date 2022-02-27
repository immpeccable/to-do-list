let loadLeftSide = () => {

    let content = document.getElementById("content");
    content.innerHTML += `<div class = "container">
    <div class = "left-side" id = "left-side">
        <div class = "button-div" id = "inbox-div">
            <img src="./images/inbox.png" alt="">
            <button>Inbox</button>
        </div>
        <div class = "button-div" id = "today-div">
            <img src="./images/calendar.png" alt="">
            <button>Today</button>
        </div>
        <div class = "button-div" id = "upcoming-div">
            <img src="./images/calendar(1).png" alt="">
            <button>Upcoming</button>
        </div>
        <div class = "projects">
            <img src="./images/icons8-filled-circle-50.png" alt="">
            <div class = "txt">
                Projects
            </div>
        </div>
        <div class = "button-div" id = "create-div">
            <img src="./images/plus.png" alt="">
            <button id = "create-button">Create New Project</button>
        </div>
        
        <div class = "replace-create passive" id = "replace-create">
            <input placeholder="project name" class = "project-name" id = "project-name" type="text">
            <div class = "project-button">
                <button id = "project-add-button">Add</button>
                <button id = "project-cancel-button">Cancel</button>
            </div>
        </div>
        
        <div class = "project-list" id = "project-list">
                    
        </div>
    </div>
    <div class="right-side" id="right-side">
                <button class = "add-task" id = "add-task">
                    <img class = "plus-img" src="images/plus.png" alt="">
                    <div>Add Task</div>
                </button>

                <div class="task-inputs passive" id="task-inputs">
                    <div class="name-date-project">
                        <input type="text" id="input-task-name" class="input-task-name" placeholder="Task Name">
                        <input type="date" id="input-task-date" class="input-task-date" placeholder="Schedule">
                        <select name="project-select" id="project-select">
                            <option value="Inbox">Inbox</option>
                        </select>
                    </div>
                    <div class = "priority-add-cancel">
                        <select name="priority-select" id="priority-select">
                            <option selected value="Inbox">Select Priority</option>
                        </select>

                        <div class ="add-cancel">
                            <button class = "input-task-add" id = "input-task-add">
                                Add
                            </button>
                            <button class = "input-task-cancel" id = "input-task-cancel">
                                Cancel 
                            </button>
                        </div>
                    </div>
                </div>

                <div class="task-grid" id = "task-grid">
                    
                </div>
            </div>
</div>
`;

}

export {loadLeftSide};