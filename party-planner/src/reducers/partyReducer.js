import {ADD_TODO_START, ADD_TODO_SUCCESS, ADD_TODO_FAILED} from '../actions'

const initialState = {
  theme: "",
  guests: "",
  budget: 100,
  date: "",
  todoList: [],
  shoppingList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
