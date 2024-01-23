import projectHandler from "./projectHandler.js";

const content = document.querySelector("#content");
const header = document.querySelector("#header");
const projectList = document.querySelector("#projects");

export function displayHeader(){
  let title = document.createElement("h1");
  title.className = "heading";
  title.textContent = "My Lists";
  header.appendChild(title);

  let btn = document.createElement("button");
  btn.className = "newProjectButton";
  btn.textContent = "+ New List";
  btn.addEventListener("click", function(e){
    projectHandler.createProject();
    displayProjects(projectHandler.getProjects);
  });
  header.appendChild(btn);
}

export function displayProjects(list){
  while(projectList.firstChild){
    projectList.removeChild(projectList.firstChild);
  }
  for(let i=0; i<list.length; i++){
    let projectPanel = document.createElement("div");
    projectPanel.className = "projectPanel";
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
    projectList.appendChild(projectPanel);
  }
}