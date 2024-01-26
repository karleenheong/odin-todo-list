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
    console.log(this.projects);
  }

  deleteProject(projectIndex){
    this.projects.splice(projectIndex, 1);
    this.reindexProjects();
    console.log(this.projects);
  }

  reindexProjects(){
    for(let i=0; i<this.projects.length; i++){
      this.projects[i].setId = i;
    }
  }
}

export default new ProjectHandler();


