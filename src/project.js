export default class Project {
  constructor(title, index){
    this.title = title;
    this.index = index;
    this.checked = false;
    this.todos = [];
  }

  get getTitle(){
    return this.title;
  }

  get getIndex(){
    return this.index;
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