import './styles.css';
import Project from './project.js';
import { displayProjects } from './dom.js';


let projects = [];

let project0 = new Project("Shopping", 0);
projects.push(project0);

console.log(projects);
console.log(project0.getTitle);
console.log(project0.getChecked);

displayProjects(projects);
