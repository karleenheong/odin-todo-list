import projectHandler from "./projectHandler.js";
import trashIcon from "./trash.png";
import backIcon from "./back.png";

const content = document.querySelector("#content");
const header = document.querySelector("#header");
const projectList = document.querySelector("#projects");

//---------Home screen-----------
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
  clearHeaderDiv();
  clearProjectListDiv();
  displayHeader();
  for(let i=0; i<list.length; i++){
    let projectPanel = document.createElement("div");
    projectPanel.className = "projectPanel";
    let projectBtn = document.createElement("button");
    projectBtn.className = "project";
    let checkbox = document.createElement("input");
    checkbox.className = "projectCheckbox";
    checkbox.setAttribute("type", "checkbox");

    projectBtn.textContent = list[i].getTitle;

    projectBtn.addEventListener("click", function(e){
      displayProject(list[i]);
    });

    projectPanel.appendChild(checkbox);
    projectPanel.appendChild(projectBtn);
    projectList.appendChild(projectPanel);
  }
}

//---------Project screen-----------
function displayProject(project){
  clearHeaderDiv();
  clearProjectListDiv();

  //Header area
  let projectHeaderContainer = document.createElement("div");
  projectHeaderContainer.className = "projectScreenHeader";

  let backBtn = document.createElement("button");
  backBtn.className = "screenIcon";
  backBtn.style.backgroundImage = `url(${backIcon})`;
  projectHeaderContainer.appendChild(backBtn);
  
  let title = document.createElement("h1");
  title.className = "projectTitle";
  title.textContent = project.getTitle;
  projectHeaderContainer.appendChild(title);

  let trashBtn = document.createElement("button");
  trashBtn.className = "screenIcon";
  trashBtn.style.backgroundImage = `url(${trashIcon})`;
  trashBtn.addEventListener("click", function(e){
    if(confirm("Are you sure you want to delete this list?")){
      projectHandler.deleteProject(project.getId);
      displayProjects(projectHandler.getProjects);
    }
  })
  projectHeaderContainer.appendChild(trashBtn);
  
  header.appendChild(projectHeaderContainer);

  //Edit list button
  let btn = document.createElement("button");
  btn.className = "editProject";
  btn.textContent = "Edit list";
  btn.addEventListener("click", function(e){
    let newName = prompt("Enter a new name for this list:");
    projectHandler.editProject(project.getId, newName);
    displayProject(project);
  });
  header.appendChild(btn);
}

function clearHeaderDiv(){
  while(header.firstChild){
    header.removeChild(header.firstChild);
  }
}

function clearProjectListDiv(){
  while(projectList.firstChild){
    projectList.removeChild(projectList.firstChild);
  }
}