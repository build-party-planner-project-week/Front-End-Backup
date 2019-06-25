import React from "react";
import TodoList from "./TodoList";
import ShoppingContainer from '../Shopping/ShoppingContainer'
import { connect } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../actions";

//will connect to redux stare and pass info through props
class Party extends React.Component {
  state = {};
  //Render Todo list
  //render shopping list

  addTodoItem = todoItem => {
    this.props.addTodo(todoItem);
  };
  toggleTodoItem = todoId => {
    this.props.toggleTodo(todoId);
  };
  deleteTodoItem = todoId => {
    this.props.deleteTodo(todoId)
  }
  render() {

    return (
      <div className="party">
        <h2 className="party-title">Sam's Birthday</h2>
        <h4><span>Party Theme:</span> Game of Thrones</h4>
        <h5><span>Date:</span></h5>
        <h5>Budget</h5>


      <div className="party-split">
        <TodoList
          todos={this.props.todos}
          addTodoItem={this.addTodoItem}
          toggleTodoItem={this.toggleTodoItem}
          deleteTodoItem={this.deleteTodoItem}
        />
        <ShoppingContainer />
        </div>
      </div>
    );
  }
}

//each party probably will need its own id
const mapStateToProps = state => {
  return {
    todos: state.partyReducer.todoList
  };
};
export default connect(
  mapStateToProps,
  { addTodo, toggleTodo, deleteTodo }
)(Party);
