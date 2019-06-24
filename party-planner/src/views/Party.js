import React from "react";
import TodoList from "./TodoList";
import {connect} from 'react-redux'
import {addTodo} from '../actions'


//will connect to redux stare and pass info through props
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

//each party probably will need its own id 
const mapStateToProps = state => {
    return {
        todos: state.partyReducer.todoList
    }
}
export default connect(mapStateToProps, {addTodo})(Party);
