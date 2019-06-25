//TodoList
export const ADD_TODO_START = "ADD_TODO"
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS"
export const ADD_TODO_FAILED = "ADD_TODO_FAILED"


export const addTodo = todo => dispatch => {
    dispatch({type: ADD_TODO_START})
    //make axios request and dispatch other actions based on resolved or rejected
    dispatch({type: ADD_TODO_SUCCESS, payload: todo})
}

export const TOGGLE_TODO = "TOGGLE_TODO";

export const toggleTodo = todoId => {
    return {
        type: TOGGLE_TODO,
        payload: todoId
    }
}