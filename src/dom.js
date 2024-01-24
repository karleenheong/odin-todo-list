import projectHandler from "./projectHandler.js";
import trashIcon from "./trash.png";
import backIcon from "./back.png";

const header = document.querySelector("#header");
const listArea = document.querySelector("#listArea");

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
  clearListAreaDiv();
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
    listArea.appendChild(projectPanel);
  }
}

//---------Project screen-----------
function displayProject(project){
  clearHeaderDiv();
  clearListAreaDiv();

  //Header area
  let projectHeaderContainer = document.createElement("div");
  projectHeaderContainer.className = "projectScreenHeader";

  let backBtn = document.createElement("button");
  backBtn.className = "screenIcon";
  backBtn.style.backgroundImage = `url(${backIcon})`;
  backBtn.addEventListener("click", function(e){
    displayProjects(projectHandler.getProjects);
  });
  projectHeaderContainer.appendChild(backBtn);
  
  let title = document.createElement("button");
  title.className = "projectTitle";
  title.textContent = project.getTitle;
  title.addEventListener("click", function(e){
    let newName = prompt("Enter a new name for this list:");
    projectHandler.editProject(project.getId, newName);
    displayProject(project);
  });
  projectHeaderContainer.appendChild(title);

  let trashBtn = document.createElement("button");
  trashBtn.className = "screenIcon";
  trashBtn.style.backgroundImage = `url(${trashIcon})`;
  trashBtn.addEventListener("click", function(e){
    if(confirm("Are you sure you want to delete this list?")){
      projectHandler.deleteProject(project.getId);
      displayProjects(projectHandler.getProjects);
    }
  });
  projectHeaderContainer.appendChild(trashBtn);
  
  header.appendChild(projectHeaderContainer);

  //New todo button
  let btn = document.createElement("button");
  btn.className = "addTodo";
  btn.textContent = "+ New Task";
  btn.addEventListener("click", function(e){
    project.createTodo();
    displayTodos(project.getTodos);
  });
  header.appendChild(btn);

  //Display todos
  displayTodos(project.getTodos);
}

function clearHeaderDiv(){
  while(header.firstChild){
    header.removeChild(header.firstChild);
  }
}

function clearListAreaDiv(){
  while(listArea.firstChild){
    listArea.removeChild(listArea.firstChild);
  }
}

//Todos area
function displayTodos(list){
  clearListAreaDiv();
  for(let i=0; i<list.length; i++){
    let todoPanel = document.createElement("div");
    todoPanel.className = "todoPanel";
    let todoBtn = document.createElement("button");
    todoBtn.className = "todo";
    let checkbox = document.createElement("input");
    checkbox.className = "todoCheckbox";
    checkbox.setAttribute("type", "checkbox");

    todoBtn.textContent = list[i].getTitle;

    todoBtn.addEventListener("click", function(e){
      displayTodo(list[i]);
    });

    todoPanel.appendChild(checkbox);
    todoPanel.appendChild(todoBtn);
    listArea.appendChild(todoPanel);
  }
}

//---------Todo screen-----------
function displayTodo(todo){
  clearHeaderDiv();
  clearListAreaDiv();
}