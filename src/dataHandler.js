export function saveProject(project){
  localStorage.setItem(project.getId.toString(), JSON.stringify(project));
}

export function retrieveProject(idString){
  return JSON.parse(localStorage.getItem(idString));
}

export function deleteProjectData(idString){
  localStorage.removeItem(idString);
}

export function deleteAllData(){
  localStorage.clear();
}

