import React from "react";

const Todo = (props) => {
    const {todo, toggleTodoItem} = props
  return (
    <div>
      <p onClick={() => toggleTodoItem(todo.id)}>{todo.title}</p>
    </div>
  )
};

export default Todo;
