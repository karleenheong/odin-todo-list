import './styles.css';
import projectHandler from './projectHandler.js';
import { displayHeader, displayProjects } from './dom-home.js';

if(localStorage.getItem("0")){
  projectHandler.retrieveAllProjects();
} else {
  projectHandler.createDefaultProject();
}

displayHeader();
displayProjects(projectHandler.getProjects);