import { observer } from "mobx-react-lite";
import React from "react";
import TodoListStore from "../stores/TodoListStore";

export default observer(() => {
  return (
    <div style={{ marginTop: "25px", marginLeft: "25px" }}>
      <button
        onClick={() =>
          TodoListStore.createTodo({
            name: "",
            isComplete: false,
            isEditable: true,
          })
        }
      >
        Create Todo
      </button>
      <ul style={{ listStyle: "none" }}>
        {TodoListStore.todos.map((todo) => (
          <li>
            <button
              onClick={() => TodoListStore.deleteTodo(todo)}
              style={{ marginRight: "4px" }}
            >
              delete
            </button>
            <input
              type="checkbox"
              onChange={() => TodoListStore.toggleCheckbox(todo)}
              style={{
                marginRight: "10px",
              }}
              checked={todo.isComplete}
            />
            {!todo.isEditable ? (
              <span
                onClick={() => TodoListStore.toggleEdit(todo)}
                style={{
                  textDecorationLine: todo.isComplete ? "line-through" : "",
                }}
              >
                {todo.name}
              </span>
            ) : (
              <input
                defaultValue={todo.name}
                onChange={(e) => TodoListStore.updateTodo(todo, e.target.value)}
                onBlur={() => TodoListStore.toggleEdit(todo)}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
});
