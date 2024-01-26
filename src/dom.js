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

    //back button (left)
  let backBtn = document.createElement("button");
  backBtn.className = "screenIcon";
  backBtn.style.backgroundImage = `url(${backIcon})`;
  backBtn.addEventListener("click", function(e){
    displayProjects(projectHandler.getProjects);
  });
  projectHeaderContainer.appendChild(backBtn);
  
    //title (middle)
  let titleDiv = document.createElement("div");
  titleDiv.className = "titleDiv";
  let title = document.createElement("input");
  title.className = "projectTitle";
  title.setAttribute("type", "text");
  title.placeholder = "untitled";
  title.value = project.getTitle;
  title.addEventListener("input", function(e){
    if(title.value.length>=0 && title.value.replace(/\s/g, '').length==0){
      project.setTitle = "untitled";
    } else {
      project.setTitle = title.value;
    }
  });
  titleDiv.appendChild(title);
  projectHeaderContainer.appendChild(titleDiv);

    //trash button (right)
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
    displayTodos(project);
  });
  header.appendChild(btn);

  //Display todos
  displayTodos(project);
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
function displayTodos(project){
  clearListAreaDiv();
  let list = project.getTodos;
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
      displayTodo(list[i], project);
    });

    todoPanel.appendChild(checkbox);
    todoPanel.appendChild(todoBtn);
    listArea.appendChild(todoPanel);
  }
}

//---------Todo screen-----------
function displayTodo(todo, project){
  clearHeaderDiv();
  clearListAreaDiv();

  //Header area
  let todoHeaderContainer = document.createElement("div");
  todoHeaderContainer.className = "todoScreenHeader";

    //back button (left)
  let backBtn = document.createElement("button");
  backBtn.className = "screenIcon";
  backBtn.style.backgroundImage = `url(${backIcon})`;
  backBtn.addEventListener("click", function(e){
    displayProject(project);
  });
  todoHeaderContainer.appendChild(backBtn);
  
    //title (middle)
  let titleDiv = document.createElement("div");
  titleDiv.className = "titleDiv";
  let title = document.createElement("input");
  title.className = "todoTitle";
  title.setAttribute("type", "text");
  title.placeholder = "unnamed task";
  title.value = todo.getTitle;
  title.addEventListener("input", function(e){
    if(title.value.length>=0 && title.value.replace(/\s/g, '').length==0){
      todo.setTitle = "unnamed task";
    } else {
      todo.setTitle = title.value;
    }
  });
  titleDiv.appendChild(title);
  todoHeaderContainer.appendChild(titleDiv);

    //trash button (right)
  let trashBtn = document.createElement("button");
  trashBtn.className = "screenIcon";
  trashBtn.style.backgroundImage = `url(${trashIcon})`;
  trashBtn.addEventListener("click", function(e){
    if(confirm("Are you sure you want to delete this task?")){
      project.deleteTodo(todo.getId);
      displayProject(project);
    }
  });
  todoHeaderContainer.appendChild(trashBtn);
  
  header.appendChild(todoHeaderContainer);

  //Todo fields and details area
  let detailsDiv = document.createElement("div");

    //Description box
  let descriptionBox = document.createElement("input");
  descriptionBox.className = "descriptionBox";
  descriptionBox.setAttribute("type", "text");
  if(todo.getDescription === ""){
    descriptionBox.placeholder = "Enter a description...";
  } else {
    descriptionBox.value = todo.getDescription;
  }
  descriptionBox.addEventListener("input", function(e){
    todo.setDescription = descriptionBox.value;
  });

  detailsDiv.appendChild(descriptionBox);
  listArea.appendChild(detailsDiv);

}