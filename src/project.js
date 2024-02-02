import Todo from './todo.js';

export default class Project {
  constructor(title, id){
    this.title = title;
    this.id = id;
    this.complete = false;
    this.todos = [];
  }

  get getTitle(){
    return this.title;
  }

  set setTitle(title){
    if(title !== ""){
      this.title = title;
    }
  }

  get getId(){
    return this.id;
  }

  set setId(id){
    this.id = id;
  }

  get getComplete(){
    return this.complete;
  }

  set setComplete(complete){
    this.complete = complete;
  }

  get getTodos(){
    return this.todos;
  }

  createTodo(){
    let newTodo = new Todo("unnamed task", this.todos.length);
    this.todos.push(newTodo);
  }

  deleteTodo(todoIndex){
    this.todos.splice(todoIndex, 1);
    this.reindexTodos();
  }

  reindexTodos(){
    for(let i=0; i<this.todos.length; i++){
      this.todos[i].setId = i;
    }
  }

  retrieveAllTodos(todos){
    for(let i=0; i<todos.length; i++){
      let restoredTodo = new Todo(todos[i]["title"], todos[i]["id"]);
      restoredTodo.setDescription = todos[i]["description"];
      restoredTodo.setDueDate = todos[i]["dueDate"];
      restoredTodo.setPriority = todos[i]["priority"];
      restoredTodo.setNotes = todos[i]["notes"];
      restoredTodo.setComplete = todos[i]["complete"];
      restoredTodo.setDueDateText = todos[i]["dueDateText"];
      this.todos.push(restoredTodo);
    }
  }
}