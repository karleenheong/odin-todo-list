import Project from './project.js';

let instance = null;

class ProjectHandler {
  constructor(){
    if(instance){
      throw new Error("Instance already exists");
    }
    instance = this;
    this.projects = [];

    //create default project
    if(this.projects.length <= 0){
    let defaultProject = new Project("Default", 0);
    this.projects.push(defaultProject);
    }
  }

  get getProjects(){
    return this.projects;
  }

  createProject(){
    let newProject = new Project("untitled", this.projects.length);
    this.projects.push(newProject);
  }
}

export default new ProjectHandler();


