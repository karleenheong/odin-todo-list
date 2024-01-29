export default class Todo {
  constructor(title, id){
    this.title = title;
    this.id = id;
    this.description = "";
    this.dueDate = "";
    this.priority = false;
    this.notes = "";
    this.complete = false;
    this.dueDateText = "";
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

  get getDueDateText(){
    return this.dueDateText;
  }

  set setDueDateText(string){
    this.dueDateText = string;
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

  get getComplete(){
    return this.complete;
  }

  set setComplete(complete){
    this.complete = complete;
  }
}