const content = document.querySelector("#content");

export function displayAppName(){
  let title = document.createElement("h1");
  title.className = "heading";
  title.textContent = "My Lists";
  content.appendChild(title);
}

export function displayProjects(list){
  for(let i=0; i<list.length; i++){
    let projectPanel = document.createElement("div");
    projectPanel.className  = "projectPanel";
    let project = document.createElement("button");
    project.className = "project";
    let checkbox = document.createElement("input");
    checkbox.className = "projectCheckbox";
    checkbox.setAttribute("type", "checkbox");

    project.textContent = list[i].getTitle;

    project.addEventListener("click", function(e){
      console.log("project pressed");
    });

    projectPanel.appendChild(checkbox);
    projectPanel.appendChild(project);
    content.appendChild(projectPanel);
  }
}