let projectButton = document.getElementsByClassName("project-button");
let projectContainer = document.getElementsByClassName("project-container");
let closeButton = document.getElementsByClassName("closeButton");
for(let i = 0; i < projectButton.length; i++) {
    projectButton[i].addEventListener("click", function(event){
        projectContainer[i].style.display = "block";
        document.body.style = "overflow-y:hidden; position: relative; margin-right: var(--widthReflow);";
})}

for(let i = 0; i < closeButton.length; i++) {
    closeButton[i].addEventListener("click", function(event){
        projectContainer[i].style.display = "none";
        document.body.style = "overflow-y:visible; position: static";});
    document.addEventListener("keypress", function(event){
})};