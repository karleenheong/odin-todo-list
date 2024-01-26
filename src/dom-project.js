import trashIcon from "./trash.png";
import backIcon from "./back.png";
import projectHandler from "./projectHandler.js";
import {clearHeaderDiv, clearListAreaDiv, displayProjects} from "./dom-home";
import {displayTodo} from "./dom-todo.js";

//---------Project screen-----------
export function displayProject(project){
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