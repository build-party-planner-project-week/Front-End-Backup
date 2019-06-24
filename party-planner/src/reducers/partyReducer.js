import { ADD_TODO_START, ADD_TODO_SUCCESS, ADD_TODO_FAILED } from "../actions";

const initialState = {
  theme: "",
  guests: "",
  budget: 100,
  date: "",
  todoList: [
    { title: "test todo", completed: false, id: 1 },
    { title: "testie todo", completed: false, id: 2},
    { title: "testarino todo", completed: false, id: 3 }
  ],
  addingItem: false, //maybe used to indicate that user is adding item to todo or shopping list and is communicating with server
  shoppingList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_START:
      return {
        ...state
      };
    default:
      return state;
  }
};
