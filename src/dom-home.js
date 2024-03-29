import projectHandler from "./projectHandler.js";
import {displayProject} from "./dom-project.js";
import createCheckbox from "./checkbox.js";

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
    let checkbox = new createCheckbox(list[i].getTitle + i);

    const actualCheckbox = checkbox.querySelector("input[type=checkbox]");
    actualCheckbox.checked = list[i].getComplete;
    actualCheckbox.addEventListener("change", function(){
      list[i].setComplete = this.checked;
      checkStrikethrough(list[i], projectBtn);
    })

    projectBtn.textContent = list[i].getTitle;
    checkStrikethrough(list[i], projectBtn);

    projectBtn.addEventListener("click", function(e){
      displayProject(list[i]);
    });

    projectPanel.appendChild(checkbox);
    projectPanel.appendChild(projectBtn);
    listArea.appendChild(projectPanel);

    if(i%2 !== 0){
      projectPanel.style.backgroundColor = "whitesmoke";
      projectBtn.style.backgroundColor = "whitesmoke";
    }
  }
}

function checkStrikethrough(project, projectBtn){
  if(project.getComplete){
    projectBtn.classList.add("completed");
  } else {
    if(projectBtn.classList.contains("completed")){
      projectBtn.classList.remove("completed");
    }
  }
}

export function clearHeaderDiv(){
  while(header.firstChild){
    header.removeChild(header.firstChild);
  }
}

export function clearListAreaDiv(){
  while(listArea.firstChild){
    listArea.removeChild(listArea.firstChild);
  }
}



