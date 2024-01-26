import trashIcon from "./trash.png";
import backIcon from "./back.png";
import {clearHeaderDiv, clearListAreaDiv} from "./dom-home";
import {displayProject} from "./dom-project";

//---------Todo screen-----------
export function displayTodo(todo, project){
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