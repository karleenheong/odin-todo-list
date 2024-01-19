const content = document.querySelector("#content");

export function displayProjects(list){
  for(let i=0; i<list.length; i++){
    let project = document.createElement("h2");
    project.className = "project";
    project.textContent = list[i].getTitle;
    content.appendChild(project);
  }
}