import './styles.css';
import Project from './project.js';
import { displayAppName, displayProjects } from './dom.js';


let projects = [];

let project0 = new Project("Shopping", 0);
projects.push(project0);

let project1 = new Project("Today", 1);
projects.push(project1);

displayAppName();
displayProjects(projects);
