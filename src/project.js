export default class Project {
  constructor(title, index){
    this.title = title;
    this.checked = false;
    this.todos = [];
  }

  get getTitle(){
    return this.title;
  }
  
  set setTitle(title){
    this.title = title;
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

  set addTodo(todo){
    this.todos.push(todo);
  }

  set removeTodo(index){
    this.todos.splice(index, 1);
  }
}