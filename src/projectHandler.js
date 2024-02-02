import Project from './project.js';
import { saveProject, retrieveProject, deleteProjectData, deleteAllData} from './dataHandler.js';

let instance = null;

class ProjectHandler {
  constructor(){
    if(instance){
      throw new Error("Instance already exists");
    }
    instance = this;
    this.projects = [];
  }

  get getProjects(){
    return this.projects;
  }

  createDefaultProject(){
    let defaultProject = new Project("Default", 0);
    this.projects.push(defaultProject);
    saveProject(defaultProject);
  }

  createProject(){
    let newProject = new Project("untitled", this.projects.length);
    this.projects.push(newProject);
    saveProject(newProject);
  }

  deleteProject(projectIndex){
    this.projects.splice(projectIndex, 1);
    deleteProjectData(projectIndex.toString());
    this.reindexProjects();
  }

  reindexProjects(){
    deleteAllData();
    for(let i=0; i<this.projects.length; i++){
      this.projects[i].setId = i;
      saveProject(this.projects[i]);
    }
  }

  retrieveAllProjects(){
    let i=0;
    let endOfArray = false;
    while(!endOfArray){
      let data = retrieveProject(i.toString());
      if(data !== null){
        let restoredProject = new Project(data["title"], +data["id"]);
        restoredProject.setComplete = data["complete"];
        let todos = data["todos"];
        restoredProject.retrieveAllTodos(todos);
        this.projects.push(restoredProject);
        i++;
      } else {
        endOfArray = true;
      }
    }
    console.log(this.projects);
  }
}

export default new ProjectHandler();


