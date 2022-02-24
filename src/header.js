let loadHeader = () => {

    let content = document.getElementById("content");
    content.innerHTML += `<div class = "header">
    <div class = "app-name">
        To Do App
    </div>

    <div class = "inbox-text">
        Inbox
    </div>
</div>
`;

}

export {loadHeader};