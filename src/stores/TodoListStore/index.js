import { observable } from "mobx";

export default observable({
  todos: [
    {
      name: "Sample",
      isComplete: false,
      isEditable: false,
    },
  ],
  createTodo(data) {
    this.todos.push(data);
  },
  deleteTodo(todo) {
    this.todos.remove(todo);
  },
  updateTodo(todo, name) {
    todo.name = name
  },
  toggleCheckbox(todo) {
    todo.isComplete === false
      ? (todo.isComplete = true)
      : (todo.isComplete = false);
  },
  toggleEdit(todo) {
    todo.isEditable === false
      ? (todo.isEditable = true)
      : (todo.isEditable = false);
  },
});
