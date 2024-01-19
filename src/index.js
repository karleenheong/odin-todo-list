import './styles.css';


const testContent = document.querySelector("#content");

let exampleText = document.createElement("p");
exampleText.textContent = "Is this working as intended";

testContent.appendChild(exampleText);
