import trashIcon from "./trash.png";
import backIcon from "./back.png";
import projectHandler from "./projectHandler.js";
import createCheckbox from "./checkbox.js";
import {clearHeaderDiv, clearListAreaDiv, displayProjects} from "./dom-home";
import {displayTodo} from "./dom-todo.js";
import { saveProject } from "./dataHandler.js";

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
    saveProject(project);
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
    //todo panel
    let todoPanel = document.createElement("div");
    todoPanel.className = "todoPanel";
    let todoBtn = document.createElement("button");
    todoBtn.className = "todo";
    let checkbox = new createCheckbox(list[i].getTitle + i);

    //due date div
    let dueDate = document.createElement("div");
    dueDate.className = "dueDateDivProject";
    dueDate.textContent = list[i].getDueDateText;
    
    //checkbox for todo
    const actualCheckbox = checkbox.querySelector("input[type=checkbox]");
    actualCheckbox.checked = list[i].getComplete;
    checkStrikethrough(list[i], todoBtn, dueDate);
    actualCheckbox.addEventListener("change", function(){
      list[i].setComplete = this.checked;
      checkStrikethrough(list[i], todoBtn, dueDate);
      changePriorityColor(list[i], todoBtn, todoPanel);
    })

    //todo button with project name
    todoBtn.textContent = list[i].getTitle;
    todoBtn.addEventListener("click", function(e){
      displayTodo(list[i], project);
    });

    todoPanel.appendChild(checkbox);
    todoPanel.appendChild(todoBtn);
    todoPanel.appendChild(dueDate);
    listArea.appendChild(todoPanel);

    if(i%2 !== 0){
      todoPanel.classList.add("oddRow");
      todoBtn.classList.add("oddRow");
    }

    changePriorityColor(list[i], todoBtn, todoPanel);
  }
}

function checkStrikethrough(todo, todoBtn, dueDate){
  if(todo.getComplete){
    todoBtn.classList.add("completed");
    dueDate.classList.add("completed");
  } else {
    if(todoBtn.classList.contains("completed")){
      todoBtn.classList.remove("completed");
    }
    if(dueDate.classList.contains("completed")){
      dueDate.classList.remove("completed");
    }
  }
}

function changePriorityColor(todo, todoBtn, todoPanel){
  if(todo.getPriority && !todo.getComplete){
    todoBtn.classList.add("priority");
    todoPanel.classList.add("priority");
  } else {
    todoBtn.classList.remove("priority");
    todoPanel.classList.remove("priority");
  }
}