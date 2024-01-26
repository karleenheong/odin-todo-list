import './styles.css';
import projectHandler from './projectHandler.js';
import { displayHeader, displayProjects } from './dom-home.js';

displayHeader();
displayProjects(projectHandler.getProjects);
