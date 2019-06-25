import React from "react";

const Todo = (props) => {
    const {todo, toggleTodoItem, deleteTodoItem} = props
  return (
    <div>
      <p onClick={() => toggleTodoItem(todo.id)}>{todo.title}</p>
      <button onClick={() => deleteTodoItem(todo.id)}>Delete</button>
    </div>
  )
};

export default Todo;
