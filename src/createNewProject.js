let projectCount = 0;

let createProject = () => {

    let projectList = document.getElementById('project-list');
    let createDiv = document.getElementById("create-div");
    let removedFrom = document.getElementById("left-side");
    createDiv.addEventListener('click', () => {

        //console.log("why are you not working");
        removedFrom.removeChild(createDiv);
        removedFrom.removeChild(projectList);
        removedFrom.innerHTML += `<div class = "replace-create" id = "replace-create">
        <input placeholder="project name" class = "project-name" id = "project-name" type="text">
        <div class = "project-button">
            <button id = "project-add-button">Add</button>
            <button id = "project-cancel-button">Cancel</button>
        </div>
    </div>`;
        removedFrom.appendChild(projectList);


        let cancelButton = document.getElementById("project-cancel-button");
        cancelButton.addEventListener('click', () => {
            let replace = document.getElementById("replace-create");
            removedFrom.removeChild(replace);
            removedFrom.appendChild(createDiv);
        });

        let addButton = document.getElementById('project-add-button');
        addButton.addEventListener('click', () => {

            let projectName = document.getElementById("project-name").value;
            let replaceCreate = document.getElementById('replace-create');

            removedFrom.removeChild(replaceCreate);
            projectList.innerHTML += `<div class = "item" id = "item-${projectName}">
                        
            <img src="images/list.png" alt="">
            <div class = "text" id = "text-${projectName}">
            </div>
            <button class = "delete-button" id = "get-delete-${projectName}">
                <img class = "delete" id = "img-${projectName}" src="images/icons8-delete-24.png" alt="">
            </button>
        </div>`;

            removedFrom.removeChild(projectList);
            removedFrom.appendChild(createDiv);
            removedFrom.appendChild(projectList);

            //console.log(projectName);
            document.getElementById("text-" + projectName).textContent = projectName;

            let deleteButton = document.getElementById('get-delete-' + projectName);
            console.log(deleteButton);
            deleteButton.addEventListener('click', (event) => {
                
                console.log(event.target.id);

            });

        });

    })

}
export { createProject };