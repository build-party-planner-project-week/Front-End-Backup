import React from "react";
import TodoList from "./TodoList";

class Party extends React.Component {
  state = {};
  //Render Todo list
  //render shopping list

  render() {
    return (
      <div>
        <h1>Party!</h1>
        <TodoList />
      </div>
    );
  }
}

export default Party;
