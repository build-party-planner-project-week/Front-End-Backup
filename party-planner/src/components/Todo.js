import React from "react";

const Todo = (props) => {
    const {todo, toggleTodoItem} = props
  return (
    <div>
      <p onClick={() => toggleTodoItem(todo.id)}>{todo.title}</p>
      <button>Delete</button>
    </div>
  )
};

export default Todo;
