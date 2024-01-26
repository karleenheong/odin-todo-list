export default function createCheckbox(id){
  let container = document.createElement("div");
  container.className = "checkboxContainer";
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.id = id;
  let label = document.createElement("label");
  label.htmlFor = id;

  container.appendChild(checkbox);
  container.appendChild(label);

  return container;
}