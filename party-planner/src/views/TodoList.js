import React from "react";

class TodoList extends React.Component {
  state = {
      todos: [],
    todoTitle: ""
  };

componentDidMount(){
    this.setState({
        todos: this.props.todos
    })
}
  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  addTodo = e => {
      e.preventDefault()
      const todoItem = {
          title: this.state.todoTitle,
          completed: false
      }
      this.props.addTodoItem(todoItem);
  }

  render() {
    return (
      <div>
          {this.state.todos.map(todo => {
              return <p key={todo.id}>{todo.title}</p>
          })}
        <form onSubmit={this.addTodo}>
          <input
            placeholder="enter todo item..."
            name="todoTitle"
            value={this.state.todoTitle}
            onChange={this.handleChanges}
          />
        </form>
      </div>
    );
  }
}

export default TodoList;
