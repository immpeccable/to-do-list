let projectCount = 0;
import{deleteButtons, projects, updateUI} from './updateUI';

let createProject = () => {

    let createDiv = document.getElementById("create-div");
    let replaceCreate = document.getElementById("replace-create");
    let addButton = document.getElementById('project-add-button');
    let cancelButton = document.getElementById("project-cancel-button");

    createDiv.addEventListener('click', () => {

        
        replaceCreate.classList.remove("passive");
        createDiv.classList.add("passive");
    })

    addButton.addEventListener('click', () => {

        
        replaceCreate.classList.add("passive");
        createDiv.classList.remove("passive");

        let projectName = document.getElementById("project-name").value;
        document.getElementById("project-name").value = "";
        
        let projectid = "";
        
        for(let i = 0; i<projectName.length; i++){
            if(projectName[i] != " "){
                projectid = projectid + projectName[i];
            }
        }

        

        updateUI(projectid, projectName);

        //console.log("item added");

        
        //console.log(projectName);
        
        

    });


    cancelButton.addEventListener('click', () => {
            
        replaceCreate.classList.add("passive");
        createDiv.classList.remove("passive");

    });

}
export { createProject };