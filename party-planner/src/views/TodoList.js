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
  }

  render() {
    return (
      <div>
          {this.state.todos.map(todo => {
              return <p key={todo.id}>{todo.title}</p>
          })}
        <form>
          <input
            placeholder="enter todo item..."
            name="todoItem"
            value={this.state.todoTitle}
            onChange={this.handleChanges}
          />
        </form>
      </div>
    );
  }
}

export default TodoList;
