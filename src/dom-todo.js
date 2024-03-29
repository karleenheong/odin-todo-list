import trashIcon from "./trash.png";
import backIcon from "./back.png";
import createCheckbox from "./checkbox.js";
import {clearHeaderDiv, clearListAreaDiv} from "./dom-home";
import {displayProject} from "./dom-project";
import {formatDistance, isValid, isToday} from "date-fns";
import { saveProject } from "./dataHandler.js";

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
    saveProject(project);
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
    saveProject(project);
  });

  detailsDiv.appendChild(descriptionBox);
  listArea.appendChild(detailsDiv);

    //Due date area
  let dateDiv = document.createElement("div");
  dateDiv.className = "dateDiv";

  let dueInText = document.createElement("p");
  dueInText.className = "dueInText";
  dueInText.textContent = "Due date";

  let dueDate = document.createElement("input");
  dueDate.className = "dueDate";
  dueDate.setAttribute("type", "date");
  let todaysDate = new Date();
  todaysDate.setHours(0,0,0,0);
  let chosenDate;

  if(todo.getDueDate === ""){
    chosenDate = new Date();
    chosenDate.setHours(0,0,0,0);
  } else {
    chosenDate = todo.getDueDate;
    let year = chosenDate.getFullYear().toString();
    let month = (chosenDate.getMonth() + 1).toString();
    if(month.length < 2){
      month = "0"+ month;
    }
    let day = chosenDate.getDate().toString();
    if(day.length < 2){
      day = "0" + day;
    }
    dueDate.value = `${year}-${month}-${day}`;
    chosenDate.setHours(0,0,0,0);
    showDaysDue(todaysDate, chosenDate, dueInText, todo);
  }

  dueDate.addEventListener("input", function(e){
    chosenDate = new Date(dueDate.value);
    chosenDate.setHours(0,0,0,0);
    if(isValid(chosenDate)){
      showDaysDue(todaysDate, chosenDate, dueInText, todo);
      todo.setDueDate = chosenDate;
      saveProject(project);
    }
  });

  dateDiv.appendChild(dueInText);
  dateDiv.appendChild(dueDate);
  detailsDiv.appendChild(dateDiv);

  //Notes box
  let notesBox = document.createElement("textarea");
  notesBox.className = "notesBox";
  if(todo.getNotes === ""){
    notesBox.placeholder = "Notes...";
  } else {
    notesBox.value = todo.getNotes;
  }
  notesBox.addEventListener("input", function(e){
    todo.setNotes = notesBox.value;
    saveProject(project);
  });

  detailsDiv.appendChild(notesBox);

  //Priority and Complete checkboxes
  let todoCheckboxesDiv = document.createElement("div");
  todoCheckboxesDiv.className = "todoCheckboxesDiv";
  let priorityCheckbox = new createCheckbox("p");
  let completedCheckbox = new createCheckbox("c");

  todoCheckboxesDiv.appendChild(priorityCheckbox);
  todoCheckboxesDiv.appendChild(completedCheckbox);
  listArea.appendChild(todoCheckboxesDiv);

  const priorityLabel = priorityCheckbox.querySelector("label");
  const completedLabel = completedCheckbox.querySelector("label");
  priorityLabel.textContent = "Priority";
  completedLabel.textContent = "Complete";

  const priorityActualCheckbox = priorityCheckbox.querySelector("input[type=checkbox]");
  const completedActualCheckbox = completedCheckbox.querySelector("input[type=checkbox]");

  priorityActualCheckbox.checked = todo.getPriority;
  completedActualCheckbox.checked = todo.getComplete;

  priorityActualCheckbox.addEventListener("change", function(){
    todo.setPriority = this.checked;
    saveProject(project);
  });
  completedActualCheckbox.addEventListener("change", function(){
    todo.setComplete = this.checked;
    saveProject(project);
  });
}

//Functions used more than once
function showDaysDue(todaysDate, chosenDate, dueInText, todo){
  let text;
  if(isToday(chosenDate)){
    text = "Due TODAY";
    dueInText.textContent = text;
    todo.setDueDateText = text;
  } else {
    let daysTillDue = formatDistance(chosenDate, todaysDate, {
      addSuffix: true
    });
    text = `Due ${daysTillDue}`;
    dueInText.textContent = text;
    todo.setDueDateText = text;
  }
}