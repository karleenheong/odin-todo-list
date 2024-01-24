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
    this.title = title;
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

  set addTodo(todo){
    this.todos.push(todo);
  }

  set removeTodo(index){
    this.todos.splice(index, 1);
  }
}