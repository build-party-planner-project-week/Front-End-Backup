import { ADD_TODO_START, ADD_TODO_SUCCESS, ADD_TODO_FAILED, TOGGLE_TODO, DELETE_TODO} from "../actions";

const initialState = {
  theme: "",
  guests: "",
  budget: 100,
  date: "",
  todoList: [

    { title: "testarino todo", completed: false, id: 3 } //I think server would have to add ids
  ],
  addingItem: false, //maybe used to indicate that user is adding item to todo or shopping list and is communicating with server
  shoppingList: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_START:
      console.log('adding todo')
      return {
        ...state
      };
      case ADD_TODO_SUCCESS:
        return {
          ...state,
          todoList: [...state.todoList, action.payload],
          error: ''
        }
        case ADD_TODO_FAILED:
          return {
            ...state,
            error: `Couldn't add todo`
          }
          case TOGGLE_TODO: 
          return {
            ...state,
            todoList: state.todoList.map(todo => {
              if(todo.id === action.payload){
                return {
                  ...todo,
                  completed: !todo.completed
                }
              } else {
                return todo
              }
            })
          }
    default:
      return state;
  }
};
