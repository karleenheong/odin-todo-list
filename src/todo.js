export default class Todo {
  constructor(title, id){
    this.title = title;
    this.id = id;
    this.description = "";
    this.dueDate = "";
    this.priority = false;
    this.notes = "";
    this.checked = false;
  }

  get getTitle(){
    return this.title;
  }

  set setTitle(title){
    this.title = title;
  }

  get getId(){
    return this.id;
  }

  set setId(id){
    this.id = id;
  }

  get getDescription(){
    return this.description;
  }
  
  set setDescription(words){
    this.description = words;
  }

  get getDueDate(){
    return this.dueDate;
  }

  set setDueDate(date){
    this.dueDate = date;
  }

  get getPriority(){
    return this.priority;
  }

  set setPriority(priority){
    this.priority = priority;
  }

  get getNotes(){
    return this.notes;
  }

  set setNotes(words){
    this.notes = words;
  }

  get getChecked(){
    return this.checked;
  }

  set setChecked(checked){
    this.checked = checked;
  }
}