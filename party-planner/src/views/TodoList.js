import React from "react";

class TodoList extends React.Component {
  state = {
      todos: this.props.todos,
    todoItem: ""
  };

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
          {this.state.todos.map(todo => {
              return <p>{todo.title}</p>
          })}
        <form>
          <input
            placeholder="enter todo item..."
            name="todoItem"
            value={this.state.todoItem}
            onChange={this.handleChanges}
          />
        </form>
      </div>
    );
  }
}

export default TodoList;
