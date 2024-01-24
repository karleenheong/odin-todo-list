import Todo from './todo.js';

export default class Project {
  constructor(title, id){
    this.title = title;
    this.id = id;
    this.checked = false;
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

  get getChecked(){
    return this.checked;
  }

  set setChecked(checked){
    this.checked = checked;
  }

  get getTodos(){
    return this.todos;
  }

  createTodo(){
    let newTodo = new Todo("unnamed task", this.todos.length);
    this.todos.push(newTodo);
  }

  editTodo(todoIndex, newName){
    if(newName !== ""){
      this.todos[todoIndex].setTitle = newName;
    }
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
}