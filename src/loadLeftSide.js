let loadLeftSide = () => {

    let content = document.getElementById("content");
    content.innerHTML += `<div class = "container">
    <div class = "left-side" id = "left-side">
        <div class = "button-div">
            <img src="./images/inbox.png" alt="">
            <button>Inbox</button>
        </div>
        <div class = "button-div">
            <img src="./images/calendar.png" alt="">
            <button>Today</button>
        </div>
        <div class = "button-div">
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
        <div class = "project-list" id = "project-list">
                    
                </div>
        
        <div></div>
    </div>
</div>
`;

}

export {loadLeftSide};