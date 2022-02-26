let deleteButtons = [];
let projects = [];

let updateUI = (projectid, projectName) =>{

    let projectList = document.getElementById('project-list');
    let removedFrom = document.getElementById("left-side");

    projects.push(projectid);
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

    for(let i = 0; i < deleteButtons.length; i++){

        
        let button = document.getElementById(deleteButtons[i].id);
        let prid = deleteButtons[i].id.replace("get-delete-", "");
        
        button.addEventListener('click', (event) => {
            

            let deleted = document.getElementById("item-"+prid);
            projectList.removeChild(deleted);

        })
    }

}

export {deleteButtons, projects, updateUI};