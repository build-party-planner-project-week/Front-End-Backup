import React from "react";

const Todo = (props) => {
    const {todo, toggleTodoItem} = props
  return (
    <div key={todo.id}>
      <p onClick={() => toggleTodoItem(todo.id)}>{todo.title}</p>
    </div>
  )
};

export default Todo;
